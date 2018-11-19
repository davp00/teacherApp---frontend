import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../classes/user';
import { LocalStorageService } from 'ngx-store';
import {Router} from '@angular/router';
import {FrontendConfig} from '../frontend-config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly APIUSERS = FrontendConfig.URL_BACKEND+'/api/users';
  public user: User = undefined;

  constructor(
    private localStorage: LocalStorageService,
    private http: HttpClient,
    private router:Router
  ) {
  }

  public LoginRequest(email: String, pass: String)
  {
      return this.http.post(this.APIUSERS + '/login',{email, pass});
  }

  public SaveUser(user: any) : void
  {
      localStorage.setItem('token', user.token);
      localStorage.setItem('name', user.name);
      localStorage.setItem('type', user.type);
      this.user = this.getUser();
  }

  public getUser(): User
  {
      if (!this.user)
      {
          let token = localStorage.getItem('token');
          if (token)
          {
              this.user = new User();
              this.user.setToken(token);
              this.user.name = localStorage.getItem('name');
              this.user.type = localStorage.getItem('type');
          }
      }

      return this.user;
  }

  public RecoveryStep1(email: String)
  {
      return this.http.post(this.APIUSERS+ '/recovery',{email});
  }


  public ChangePassword(token, pass)
  {
      return this.http.put(this.APIUSERS+'/changepassword',{pass}, {headers: UserService.RequestOptions(token)});
  }


  public ValidateRecoveryToken(token)
  {
      return this.http.post(this.APIUSERS + '/recoveryToken',{}, {headers: UserService.RequestOptions(token)})
  }

  public ProfileInfo()
  {
      return this.http.get( this.APIUSERS , {headers: UserService.RequestOptions(this.getUser().getToken())})
  }


  public static RequestOptions(token)
  {
      return new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+token
      });
  }

  public headers()
  {
      return {headers: UserService.RequestOptions(this.getUser().getToken())}
  }


  public PageType(type: Number)
  {
      if (type == 1)this.router.navigate(['/teacher']); // Si es profesor
      else if ( type == 2) this.router.navigate(['/profile']);
  }


  public IfisAuth()
  {
      if (this.getUser())
      {
          this.PageType(this.user.type);
      }
  }

  public CloseSession()
  {
      this.user = undefined;
      localStorage.clear();
  }
}
