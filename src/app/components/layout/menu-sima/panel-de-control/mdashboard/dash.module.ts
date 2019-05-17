import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ContentHeaderModule} from '../../../widgets/content-header/content-header.module';
import {PaginationModule} from '../../../widgets/pagination/pagination.module';
import {SimaBackendSessionService} from '../../../../../services/sima-backend/sima-backend-session.service';
import {SimaBackendMenuServiceService} from '../../../../../services/sima-backend/sima-backend-menu.service';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardListComponent} from './dashboard-list/dashboard-list.component';
import {DashboardComponent} from './dashboard.component';
//import {UsuarioFormNewComponent} from './dashboard-form-new/dashboard-form-new.component';
import {SimaBackendLugarOperativoServiceService} from '../../../../../services/sima-backend/sima-backend-lugar-operativo.service';
import {SimaBackendUsuarioServiceService} from '../../../../../services/sima-backend/sima-backend-usuario.service';
//import {UsuarioFormEditComponent} from './usuario-form-edit/usuario-form-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    ContentHeaderModule,
    PaginationModule
  ],
  declarations: [
    DashboardListComponent,
   // UsuarioFormNewComponent,
    //UsuarioFormEditComponent,
    DashboardComponent
  ],
  providers: [
    SimaBackendSessionService,
    SimaBackendUsuarioServiceService,
    SimaBackendLugarOperativoServiceService
  ]
})

export class DashboardModule {
}
