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


const appRoutes: Routes = [
    { path:  '',
      component: LoginComponent},
    { path:  'recovery',
      component: RecoveryStep1Component},
    { path:  'recovery/:token',
      component:RecoveryStep2Component},
    { path:  'teacher',
      component: TeacherGroupsComponent},
    { path:  'group/:groupCode/lesson/:lessonCode',
      component: TeacherAssistanceComponent},
    { path: 'group/:groupCode/table',
      component: InfoTableComponent}
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
