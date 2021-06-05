import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import{MatConfirmDialogComponent} from './mat-confirm-dialog/mat-confirm-dialog.component'
import { RegisterComponent } from './register/register.component';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'student', component:StudentComponent, canActivate: [AuthGuard], canDeactivate:[AuthGuard]},
  {path:'mat-confirm-dialog', component:MatConfirmDialogComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
