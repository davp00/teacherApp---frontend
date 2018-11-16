import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherGroupsComponent } from './teacher-groups.component';

describe('TeacherGroupsComponent', () => {
  let component: TeacherGroupsComponent;
  let fixture: ComponentFixture<TeacherGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
