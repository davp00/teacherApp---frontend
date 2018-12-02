import { Injectable } from '@angular/core';
import {UserService} from '../../services/user.service';
import {HttpClient} from '@angular/common/http';
import {FrontendConfig} from '../../frontend-config';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  readonly APIACTIVITIES = FrontendConfig.URL_BACKEND + '/api/activities';


  constructor(
    private userService: UserService,
    private http: HttpClient
  ) { }

  public getActivities(groupCode)
  {
    return this.http.get(this.APIACTIVITIES + '/' + groupCode, this.userService.headers());
  }
}
