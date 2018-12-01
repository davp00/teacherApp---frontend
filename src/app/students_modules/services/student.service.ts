import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FrontendConfig} from '../../frontend-config';
import {UserService} from '../../services/user.service';
import {tick} from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  readonly APISTUDENTS = FrontendConfig.URL_BACKEND + '/api/students';

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  public getGroups()
  {
      return this.http.get(this.APISTUDENTS + '/groups', this.userService.headers());
  }

  public sendExcuse(data)
  {
      return this.http.post(this.APISTUDENTS +'/excuse', data, {
          headers: UserService.RequestOptions(this.userService.getUser().getToken()).delete('Content-Type')
      })
  }

  public getLessons(groupCode)
  {
      return this.http.get(this.APISTUDENTS + '/group/'+groupCode+'/lessons', this.userService.headers());
  }
}
