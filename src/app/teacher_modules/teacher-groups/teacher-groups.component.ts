import { Component, OnInit } from '@angular/core';
import {Group} from '../../classes/group';
import {TeacherService} from '../services/teacher.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LoadingSpinerService} from '../../services/loading-spiner.service';

@Component({
  selector: 'app-teacher-groups',
  templateUrl: './teacher-groups.component.html',
  styleUrls: ['./teacher-groups.component.css']
})
export class TeacherGroupsComponent implements OnInit {

  public groups:Group[] = [];
  public form: FormGroup

  constructor(
    private teacherService:TeacherService,
    private fb: FormBuilder,
    private router: Router,
    public loading: LoadingSpinerService
  )
  {
      loading.Show();
      document.title = "Grupos - Profesor";
      this.form = this.fb.group({
          title:['', Validators.required]
      });
  }

  ngOnInit() {
      this.teacherService.getGroups().subscribe(
        (res)=>
        {
            this.groups = res as Group[];
            this.loading.Hide();
        },
        (error)=>
        {
        }
      );
  }


  NewLesson(code)
  {
      if (!this.form.valid)return;
      this.teacherService.newLesson({ groupCode : code, title:this.form.value.title}).subscribe(
        (res: any)=>
        {
          console.log('Se creo');
          this.form.reset();
          this.router.navigate([`/group/${code}/lesson/${res.lessonCode}`]);
        },
        (error) =>
        {

        }
      );
  }

}
