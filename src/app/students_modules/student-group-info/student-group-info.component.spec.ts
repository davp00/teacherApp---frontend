import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentGroupInfoComponent } from './student-group-info.component';

describe('StudentGroupInfoComponent', () => {
  let component: StudentGroupInfoComponent;
  let fixture: ComponentFixture<StudentGroupInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentGroupInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentGroupInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
