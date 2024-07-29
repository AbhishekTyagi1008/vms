import { LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ServicemanagerComponent } from './servicemanager/servicemanager/servicemanager.component';
import { AuthgaurdService } from './Services/Gaurd/authgaurd.service';
import { UnauthorizedComponent } from './login/unauthorized/unauthorized.component';
import { VehiclecrudComponent } from './admin/vehicle/vehiclecrud/vehiclecrud.component';
import { DueservicevehicleComponent } from './admin/vehicle/dueservicevehicle/dueservicevehicle.component';
import { UnderservicevehicleComponent } from './admin/vehicle/underservicevehicle/underservicevehicle.component';
import { DoneservicevehicleComponent } from './admin/vehicle/doneservicevehicle/doneservicevehicle.component';
import { VehicleComponent } from './admin/vehicle/vehicle.component';

const routes: Routes = 
[
  {path:'',component:LoginComponent},
  {path:'unauthorized',component:UnauthorizedComponent},
  {path:'admin',component:AdminComponent,canActivate:[AuthgaurdService],
    children:
    [
      {path:'vehicle',component:VehicleComponent,
        children:
        [
          {path:'add',component:VehiclecrudComponent},
          {path:'due',component:DueservicevehicleComponent},
          {path:'under',component:UnderservicevehicleComponent},
          {path:'done',component:DoneservicevehicleComponent}
        ]
      }
    ]},
  {path:'serviceadvisor',component:ServicemanagerComponent,canActivate:[AuthgaurdService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
