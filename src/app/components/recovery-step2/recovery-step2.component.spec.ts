import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryStep2Component } from './recovery-step2.component';

describe('RecoveryStep2Component', () => {
  let component: RecoveryStep2Component;
  let fixture: ComponentFixture<RecoveryStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoveryStep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveryStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
