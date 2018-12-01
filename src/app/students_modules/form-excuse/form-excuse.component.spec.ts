import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExcuseComponent } from './form-excuse.component';

describe('FormExcuseComponent', () => {
  let component: FormExcuseComponent;
  let fixture: ComponentFixture<FormExcuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormExcuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormExcuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
