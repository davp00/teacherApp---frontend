import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-activities',
  templateUrl: './student-activities.component.html',
  styleUrls: ['./student-activities.component.css']
})
export class StudentActivitiesComponent implements OnInit {

  constructor() {
    document.title = "Actividades - Grupo";
  }

  ngOnInit() {
  }

}
