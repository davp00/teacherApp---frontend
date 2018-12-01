import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Student} from '../../classes/student';
import {TeacherService} from '../services/teacher.service';
import {LoadingSpinerService} from '../../services/loading-spiner.service';
import {SwalComponent} from '@toverux/ngx-sweetalert2';
import {Lesson} from '../../classes/lesson';
import {FrontendConfig} from '../../frontend-config';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-teacher-assistance',
  templateUrl: './teacher-assistance.component.html',
  styleUrls: ['./teacher-assistance.component.css']
})
export class TeacherAssistanceComponent implements OnInit {
  @ViewChild('succesAlert') private succesAlert: SwalComponent;
  private groupCode;
  public lesson:Lesson = new Lesson();
  public students:Student[];

  constructor(
    private route: ActivatedRoute,
    public teacherService: TeacherService,
    public userService: UserService,
    public loading: LoadingSpinerService,
    public router: Router,
  )
  {
      loading.Show();
      document.title = "Marcar asistencia - TeacherApp";
  }

  ngOnInit() {
      this.groupCode = this.route.snapshot.paramMap.get('groupCode');
      this.lesson.code = this.route.snapshot.paramMap.get('lessonCode');

      this.teacherService.getLessonInfo(this.lesson.code).subscribe(
        (res:any)=>
        {
            this.lesson.title = res.title;
            this.lesson.finish_date = res.finish_date;
        },
        ()=>
        {

        }
      );

      this.teacherService.getGroupStudents(this.groupCode).subscribe(
        (res:any) =>
        {
          this.students = res as Student[];
          this.loading.Hide();
        },
        (error) =>
        {
          console.log('Ocurrio un error');
        }
      )
  }

  public setAssisted(student: Student)
  {
      if( ! this.lesson.finish_date ) student.assisted = !student.assisted;
  }


  public SendLessonData(): void
  {
      this.teacherService.EndLesson(this.students,this.lesson.code).subscribe(
        (res:any)=>
        {
          this.succesAlert.show();
        },
        (error)=>
        {

        }
      )
  }

  public setLocation()
  {
      this.router.navigate(['/teacher']);
  }
}
