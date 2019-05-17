import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ContentHeaderModule} from '../../../widgets/content-header/content-header.module';
import {PaginationModule} from '../../../widgets/pagination/pagination.module';
import {SimaBackendSessionService} from '../../../../../services/sima-backend/sima-backend-session.service';
import {SimaBackendMenuServiceService} from '../../../../../services/sima-backend/sima-backend-menu.service';
import {LugarOperativoRoutingModule} from './lugar-operativo-routing.module';
import {LugarOperativoListComponent} from './lugar-operativo-list/lugar-operativo-list.component';
import {LugarOperativoComponent} from './lugar-operativo.component';
import {LugarOperativoFormEditComponent} from './lugar-operativo-form-edit/lugar-operativo-form-edit.component';
import {LugarOperativoFormNewComponent} from './lugar-operativo-form-new/lugar-operativo-form-new.component';
import {SimaBackendLugarOperativoServiceService} from '../../../../../services/sima-backend/sima-backend-lugar-operativo.service';
import {SimaBackendUsuarioServiceService} from '../../../../../services/sima-backend/sima-backend-usuario.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LugarOperativoRoutingModule,
    ContentHeaderModule,
    PaginationModule
  ],
  declarations: [
   LugarOperativoFormNewComponent,
    LugarOperativoFormEditComponent,
    LugarOperativoListComponent,
    LugarOperativoComponent
  ],
  providers: [
    SimaBackendSessionService,
    SimaBackendUsuarioServiceService,
    SimaBackendLugarOperativoServiceService
  ]
})

export class LugarOperativoModule {
}
