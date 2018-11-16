import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryStep1Component } from './recovery-step1.component';

describe('RecoveryStep1Component', () => {
  let component: RecoveryStep1Component;
  let fixture: ComponentFixture<RecoveryStep1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoveryStep1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveryStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
