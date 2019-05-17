import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ContentHeaderModule} from '../../../widgets/content-header/content-header.module';
import {PaginationModule} from '../../../widgets/pagination/pagination.module';
import {SimaBackendSessionService} from '../../../../../services/sima-backend/sima-backend-session.service';
import {SimaBackendMenuServiceService} from '../../../../../services/sima-backend/sima-backend-menu.service';
import {Usuario1RoutingModule} from './usuarioss-routing.module';
import {Usuario1ListComponent} from './usuario1-list/usuario1-list.component';
//import {Usuario1FormNewComponent} from './usuario1-form-new/usuario1-form-new.component';
import {SimaBackendLugarOperativoServiceService} from '../../../../../services/sima-backend/sima-backend-lugar-operativo.service';
import {SimaBackendUsuarioServiceService} from '../../../../../services/sima-backend/sima-backend-usuario.service';
import {UsuarioFormEditComponent} from './usuario1-form-edit/usuario1-form-edit.component';
import {Usuario1Component} from './usuarioss.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Usuario1RoutingModule,
    ContentHeaderModule,
    PaginationModule
  ],
  declarations: [
    Usuario1ListComponent,
    //Usuario1FormNewComponent,
    //Usuario1FormEditComponent,
    Usuario1Component
  ],
  providers: [
    SimaBackendSessionService,
    SimaBackendUsuarioServiceService,
    SimaBackendLugarOperativoServiceService
  ]
})

export class UsuarioModule {
}
