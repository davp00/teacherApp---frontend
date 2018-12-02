import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// App FrontConfig
import { AppRoutesModule } from './app-routes/app-routes.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WebStorageModule } from 'ngx-store';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

// Components
import { LoginComponent } from './components/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RecoveryStep1Component } from './components/recovery-step1/recovery-step1.component';
import { RecoveryStep2Component } from './components/recovery-step2/recovery-step2.component';
import { LoadingComponent } from './components/loading/loading.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TeacherGroupsComponent } from './teacher_modules/teacher-groups/teacher-groups.component';
import { TeacherAssistanceComponent } from './teacher_modules/teacher-assistance/teacher-assistance.component';
import { ClockComponent } from './teacher_modules/clock/clock.component';
import { InfoTableComponent } from './teacher_modules/info-table/info-table.component';
import { ProfileComponent } from './components/profile/profile.component';
import { StudentIndexComponent } from './students_modules/student-index/student-index.component';
import { FormExcuseComponent } from './students_modules/form-excuse/form-excuse.component';
import { StudentGroupInfoComponent } from './students_modules/student-group-info/student-group-info.component';
import { ActivityChatComponent } from './activity-modules/activity-chat/activity-chat.component';
import { StudentActivitiesComponent } from './students_modules/student-activities/student-activities.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    RecoveryStep1Component,
    RecoveryStep2Component,
    LoadingComponent,
    NavbarComponent,
    FooterComponent,
    TeacherGroupsComponent,
    TeacherAssistanceComponent,
    ClockComponent,
    InfoTableComponent,
    ProfileComponent,
    StudentIndexComponent,
    FormExcuseComponent,
    StudentGroupInfoComponent,
    ActivityChatComponent,
    StudentActivitiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    WebStorageModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      confirmButtonClass: 'btn btn-success btn-sm',
      cancelButtonClass: 'btn btn-danger btn-sm'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
