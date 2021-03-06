import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeAheadWithinFormComponent } from './type-ahead-within-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TypeAheadComponent } from '@ui-model/angular-bootstrap';
import { TypeAheadDirective } from '@ui-model/angular';

xdescribe('TypeAheadWithinFormComponent', () => {
  let component: TypeAheadWithinFormComponent;
  let fixture: ComponentFixture<TypeAheadWithinFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [TypeAheadDirective, TypeAheadComponent, TypeAheadWithinFormComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeAheadWithinFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
