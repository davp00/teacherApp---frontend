import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { UserService } from '../../services/user.service';
import {RequestInformation} from '../../classes/request-information';
import {LoadingSpinerService} from '../../services/loading-spiner.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public form: FormGroup;
  public errorRequest: RequestInformation = undefined;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private loading: LoadingSpinerService,
  )
  {
      this.form = this.fb.group(
        {
            email:['', [Validators.required, Validators.email]],
            pass:['', Validators.required]
        }
      );
  }

  ngOnInit() {
      this.userService.IfisAuth();
  }

  login() : void
  {
      this.errorRequest = undefined;
      this.loading.Show();
      let email = this.form.value.email;
      let pass = this.form.value.pass;
      this.userService.LoginRequest(email, pass).subscribe(
        (res:any)=>
        {
            this.userService.SaveUser(res);
            this.loading.Hide();
            this.userService.PageType(res.type);
        },
        (error:any) =>
        {
          this.errorRequest = new RequestInformation(error.status, error.error.message);
          this.loading.Hide();
        }
      )
  }

}
