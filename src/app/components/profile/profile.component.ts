import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import {LoadingSpinerService} from '../../services/loading-spiner.service';
import {RequestInformation} from '../../classes/request-information';
import {User} from '../../classes/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public form: FormGroup;
  public formPhoto: FormGroup;
  public request: RequestInformation = undefined;
  public user: User = new User();

  constructor(
    public userService: UserService,
    private fb: FormBuilder,
    private loading: LoadingSpinerService,
    private cd: ChangeDetectorRef
  ) {
    this.form = this.fb.group(
      {
        pass:['', Validators.required],
        pass2:['', Validators.required]
      }
    );

    this.formPhoto = this.fb.group({
        photo: ''
    });
  }

  ngOnInit() {

      this.userService.ProfileInfo().subscribe(
          (res:any) => {
              this.user = res as User;
          }
      )
  }

  public sendRequest()
  {
      this.request  = undefined;
      this.loading.Show();
      let pass      = this.form.value.pass;
      this.userService.ChangePassword(this.userService.getUser().getToken(), pass).subscribe(
        (res: any)=>
        {
          this.request = new RequestInformation(200, res.message);
          this.form.reset();
          this.loading.Hide();
        },
        (error:any) =>
        {
          this.request = new RequestInformation(error.status, error.error.message);
          this.loading.Hide();
        }
      );
  }

  public UploadPhoto(event) : void
  {
      if (this.formPhoto.value.photo)
      {
          const [photo] = event.target.files,
                fd      = new FormData();
          fd.append('photo', photo);
          this.userService.APIPhoto(fd).subscribe(
            (res:any) =>
            {
                this.user.img_url = res.img_url;
            }
            ,
            (err) =>
            {

            }
          );
      }
  }

}
