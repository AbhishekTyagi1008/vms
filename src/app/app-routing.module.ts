import { LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ServicemanagerComponent } from './servicemanager/servicemanager/servicemanager.component';

const routes: Routes = 
[
  {path:'',component:LoginComponent},
  {path:'admin',component:AdminComponent},
  {path:'servicemanager',component:ServicemanagerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
