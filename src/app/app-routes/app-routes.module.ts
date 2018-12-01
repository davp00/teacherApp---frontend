import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';


// Components
import { LoginComponent } from '../components/login/login.component';
import {RecoveryStep1Component} from '../components/recovery-step1/recovery-step1.component';
import {RecoveryStep2Component} from '../components/recovery-step2/recovery-step2.component';
import {TeacherGroupsComponent} from '../teacher_modules/teacher-groups/teacher-groups.component';
import {TeacherAssistanceComponent} from '../teacher_modules/teacher-assistance/teacher-assistance.component';
import {InfoTableComponent} from '../teacher_modules/info-table/info-table.component';
import {ProfileComponent} from '../components/profile/profile.component';
import {StudentIndexComponent} from '../students_modules/student-index/student-index.component';
import {FormExcuseComponent} from '../students_modules/form-excuse/form-excuse.component';
import {StudentGroupInfoComponent} from '../students_modules/student-group-info/student-group-info.component';


const appRoutes: Routes = [
    // RUTAS DEL USUARIO
    { path:  '',
      component: LoginComponent},

    { path:  'profile',
      component: ProfileComponent},

    { path:  'recovery',
      component: RecoveryStep1Component},

    { path:  'recovery/:token',
      component:RecoveryStep2Component},
    ///

    // RUTAS DEL PROFESOR
    { path:  'teacher',
      component: TeacherGroupsComponent},

    { path:  'group/:groupCode/lesson/:lessonCode',
      component: TeacherAssistanceComponent},

    { path: 'group/:groupCode/table',
      component: InfoTableComponent},
    ///

    // RUTAS DEL ESTUDIANTE
    { path: 'student',
      component: StudentIndexComponent},

    { path: 'group/:groupCode',
      component: StudentGroupInfoComponent},
    { path: 'group/:groupCode/excuse',
      component: FormExcuseComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutesModule { }
