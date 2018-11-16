import { Component, OnInit } from '@angular/core';
import {LoadingSpinerService} from '../../services/loading-spiner.service';
import {TeacherService} from '../services/teacher.service';
import {ActivatedRoute} from '@angular/router';
import {Lesson} from '../../classes/lesson';
import {Student} from '../../classes/student';

@Component({
  selector: 'app-info-table',
  templateUrl: './info-table.component.html',
  styleUrls: ['./info-table.component.css']
})
export class InfoTableComponent implements OnInit {

  private   groupCode;
  public    lessons   :Array<Lesson>;
  public    students  :Array<Student>;

  constructor(
    public loading:LoadingSpinerService,
    public teacherService: TeacherService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

      this.loading.Show();

      this.groupCode = this.route.snapshot.paramMap.get('groupCode');

      this.teacherService.getDataTable(this.groupCode).subscribe(
          (res : any) =>
          {
              this.lessons    = res.lessons   as Lesson[];
              this.students   = res.students  as Student[];
              this.loading.Hide();
          }
      );
  }

}
