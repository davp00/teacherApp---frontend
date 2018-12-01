import { Component, OnInit } from '@angular/core';
import {Lesson} from '../../classes/lesson';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StudentService} from '../services/student.service';
import {ActivatedRoute} from '@angular/router';
import {LoadingSpinerService} from '../../services/loading-spiner.service';
import {RequestInformation} from '../../classes/request-information';

@Component({
  selector: 'app-form-excuse',
  templateUrl: './form-excuse.component.html',
  styleUrls: ['./form-excuse.component.css']
})
export class FormExcuseComponent implements OnInit {

  public lessons:Array<Lesson> = [];
  public form:FormGroup;
  public formData:FormData = new FormData();
  public requestInfo:RequestInformation = undefined;

  constructor(
    private route: ActivatedRoute,
    private fb:FormBuilder,
    private studentService:StudentService,
    public loadingService:LoadingSpinerService
  ) {
    this.form = fb.group({
        lesson  :['0',Validators.required],
        message : [''],
        file    : ['', Validators.required]
    });
  }

  ngOnInit() {
      let groupCode = this.route.snapshot.paramMap.get('groupCode');
      this.formData.set('groupCode', groupCode);

      this.studentService.getLessons(groupCode).subscribe(
        (res)=>
        {
            this.lessons = res as Lesson[];
        },
        (error) =>
        {
          console.log(error);
        }
      )
  }

  public SelectedFile(event)
  {
    if (this.form.value.file)
    {
        const [fileExcuse] = event.target.files;
        this.formData.set('fileExcuse', fileExcuse);
    }
  }

  public parseFile(fileDir)
  {
      return fileDir.split('\\').pop();
  }

  public Send(): void
  {
      this.requestInfo = undefined;
      if (this.form.value.lesson != 0)
      {
          this.loadingService.Show();
          this.formData.set('message', this.form.value.message);
          this.formData.set('lesson', this.form.value.lesson);
          this.studentService.sendExcuse(this.formData).subscribe(
            (res:any)=>
            {
              this.requestInfo = new RequestInformation(200,res.message);
              this.form.reset();
              this.loadingService.Hide();
            },
            (error) =>
            {
                this.loadingService.Hide();
            }
          )
      }else alert('Debe seleccionar una clase para poder enviar la excusa');
  }

}
