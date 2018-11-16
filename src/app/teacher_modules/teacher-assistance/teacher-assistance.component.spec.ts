import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherAssistanceComponent } from './teacher-assistance.component';

describe('TeacherAssistanceComponent', () => {
  let component: TeacherAssistanceComponent;
  let fixture: ComponentFixture<TeacherAssistanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherAssistanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherAssistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
