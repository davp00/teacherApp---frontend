import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {RequestInformation} from '../../classes/request-information';
import {LoadingSpinerService} from '../../services/loading-spiner.service';

@Component({
  selector: 'app-recovery-step2',
  templateUrl: './recovery-step2.component.html',
  styleUrls: ['./recovery-step2.component.css']
})
export class RecoveryStep2Component implements OnInit {

  private token: String;
  public form: FormGroup;
  public res: RequestInformation;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService,
    private loading: LoadingSpinerService
  )
  {
      this.form = this.fb.group({
          pass1:['', Validators.required],
          pass2:['', Validators.required]
      });
  }


  ngOnInit() {
      this.userService.IfisAuth();
      this.token = this.route.snapshot.paramMap.get('token');
  }


  SendRequest(): void
  {
      this.res = undefined;
      this.loading.Show();
      let pass = this.form.value.pass1;
      this.userService.ChangePassword(this.token, pass).subscribe(
        (res: any)=>
        {
            this.res = new RequestInformation(200, res.message);
            this.form.reset();
            this.loading.Hide();
        },
        (error:any) =>
        {
            this.res = new RequestInformation(error.status, error.error.message);
            this.loading.Hide();
        }
      );
  }

}
