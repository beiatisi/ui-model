import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormComponent } from './form.component';
import { FormsModule } from '@angular/forms';
import { FormUtils, UiModelModule } from '@ui-model/angular';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ShowcaseFormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponent],
      imports: [FormsModule, UiModelModule],
      providers: [FormUtils],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
