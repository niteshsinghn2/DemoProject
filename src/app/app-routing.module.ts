import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAComponent } from './form-a/form-a.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DynamicComponent } from './dynamic/dynamic.component';
const routes: Routes = [
    { path: 'login', component: LoginComponent },
		{path: 'form-a', component:FormAComponent}, 
    { path: 'register', component: RegisterComponent },
	{ path: 'dynamic', component: DynamicComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
