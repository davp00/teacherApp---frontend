import { Injectable } from '@angular/core';
import {UserService} from '../../services/user.service';
import {HttpClient} from '@angular/common/http';
import {FrontendConfig} from '../../frontend-config';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  readonly API = FrontendConfig.URL_BACKEND + '/api/teacher';

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) {
  }

  public getGroups() {
    return this.http.get(this.API + '/groups', this.userService.headers());
  }


  public newLesson(data)
  {
      return this.http.post(this.API+'/group/lesson',data, this.userService.headers());
  }

  public getGroupStudents(groupCode)
  {
      return this.http.get(`${this.API + '/group/' + groupCode + '/students'}`, this.userService.headers());
  }

  public getLessonInfo(lessonCode)
  {
      return this.http.get(`${this.API + '/lesson/' + lessonCode}`, this.userService.headers());
  }

  public EndLesson(data, lessonCode)
  {
      return this.http.put(`${this.API + '/group/lesson'}`,{students:data, code:lessonCode}, this.userService.headers());
  }

  public getDataTable(groupCode)
  {
      return this.http.get(`${this.API + '/group/' +  groupCode + '/info'}`, this.userService.headers());
  }
}
