import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { UserService } from '../../services/user.service';
import {RequestInformation} from '../../classes/request-information';
import {LoadingSpinerService} from '../../services/loading-spiner.service';

@Component({
  selector: 'app-recovery-step1',
  templateUrl: './recovery-step1.component.html',
  styleUrls: ['./recovery-step1.component.css']
})
export class RecoveryStep1Component implements OnInit {

  public form: FormGroup;
  public request: RequestInformation = undefined;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private loading: LoadingSpinerService
  )
  {
      this.form = this.fb.group({
          email:['', [Validators.required, Validators.email]]
      });
  }

  ngOnInit() {
      this.userService.IfisAuth();
  }

  SendRequest()
  {
      this.request = undefined;
      this.loading.Show();
      let email = this.form.value.email;
      this.userService.RecoveryStep1(email).subscribe(
        (res:any)=>
        {
            console.log(res);
            this.request = new RequestInformation(200, res.message);
            this.form.reset();
            this.loading.Hide();
        },
        (error) =>
        {
            this.request = new RequestInformation(error.status, error.error.message);
            this.loading.Hide();
        }
      );
  }
}
