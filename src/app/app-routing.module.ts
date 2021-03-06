import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { HomeComponent } from './components/home/home.component';
import { ViewGradsComponent } from './components/view-grads/view-grads.component';
import { DisplayGradsComponent } from './display-grads/display-grads.component';

const routes: Routes = [
  {path: '', component: LogInComponent},
  {path: 'register', component: RegisterFormComponent},
  {path : 'home', component: HomeComponent},
  {path : 'login', component: LogInComponent},
  {path : 'viewgrad', component : ViewGradsComponent},
  {path : 'displaygrads', component: DisplayGradsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
