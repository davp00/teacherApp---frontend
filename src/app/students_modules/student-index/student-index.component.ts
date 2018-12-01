import { Component, OnInit } from '@angular/core';
import {StudentService} from '../services/student.service';
import {LoadingSpinerService} from '../../services/loading-spiner.service';
import {Group} from '../../classes/group';

@Component({
  selector: 'app-student-index',
  templateUrl: './student-index.component.html',
  styleUrls: ['./student-index.component.css']
})
export class StudentIndexComponent implements OnInit {

  public groups:Array<Group>;

  constructor(
    private studentService: StudentService,
    public  loadingService: LoadingSpinerService,

  ) { }

  ngOnInit() {
      this.loadingService.Show();
      this.studentService.getGroups().subscribe(
        (res) =>
        {
            this.loadingService.Hide();
            this.groups = res as Group[];
        },
        (error) =>
        {

        }
      )
  }

}
