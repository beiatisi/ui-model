import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, } from '@angular/forms';
import { isDate } from '../validators/is-date.validator';
import { format, parse } from 'date-fns';

// tslint:disable:directive-selector
@Directive({
  selector: 'input[type=date],[uiDateInput]',
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: DateInputDirective },
    { provide: NG_VALIDATORS, multi: true, useExisting: DateInputDirective },
  ],
})
export class DateInputDirective implements ControlValueAccessor, Validator {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
  }

  get element(): Element {
    return this.elementRef.nativeElement;
  }

  validate(c: AbstractControl): ValidationErrors | any {
    return isDate(c);
  }

  writeValue(value: Date): void {
    this.renderer.setProperty(this.element, 'value', value ? format(value, 'YYYY-MM-DD') : '');
  }

  private onChange: (value: Date) => void;

  @HostListener('change', ['$event.target'])
  change(input: HTMLInputElement): void {
    if (input.type === 'date') {
      this.changed(parse(input.value));
    }
  }

  @HostListener('blur', ['$event.target'])
  blur(input: HTMLInputElement): void {
    this.changed(parse(input.value));
    this.touched();
  }

  protected changed(value: Date): void {
    if (this.onChange) {
      this.onChange(value);
    }
  }

  registerOnChange(fn: (value: Date) => void): void {
    this.onChange = fn;
  }

  private onTouched: () => void;

  protected touched(): void {
    if (this.onTouched) {
      this.onTouched();
    }
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.renderer.setProperty(this.element, 'disabled', isDisabled);
  }
}
