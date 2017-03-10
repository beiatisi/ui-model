import {Component, forwardRef, Input} from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';
import {Select} from 'ui-model';

const RADIO_GROUP_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioGroupComponent),
  multi: true,
};
@Component({
  selector: 'ui-radio-group',
  templateUrl: 'radio-group.component.html',
  styleUrls: ['radio-group.component.scss'],
  providers: [RADIO_GROUP_VALUE_ACCESSOR]
})
export class RadioGroupComponent<T> extends Select<T> implements ControlValueAccessor {
  constructor() {
    super();
  }

  @Input() options: T[];

  onChange: (_: any) => {};
  onTouched: () => {};

  protected changed() {
    super.changed();
    if (this.onChange) {
      this.onChange(this.selection);
    }
    if (this.onTouched) {
      this.onTouched();
    }
  }

  writeValue(value: T): void {
    this.select(value);
  }

  registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }
}
