import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LugarOperativoListComponent} from './lugar-operativo-list/lugar-operativo-list.component';
import {LugarOperativoComponent} from './lugar-operativo.component';
import {LugarOperativoFormNewComponent} from './lugar-operativo-form-new/lugar-operativo-form-new.component';
import {LugarOperativoFormEditComponent} from './lugar-operativo-form-edit/lugar-operativo-form-edit.component';

const routes: Routes = [
  {
    path: '',
    component: LugarOperativoComponent,
    children: [
      {
        path: 'menu-sima/panel-de-control/lugar-operativo/list',
        component: LugarOperativoListComponent
      },
      {
        path: 'menu-sima/panel-de-control/lugar-operativo/form-new',
        component: LugarOperativoFormNewComponent
    },
      {
        path: 'menu-sima/panel-de-control/lugar-operativo/form-edit',
        component: LugarOperativoFormEditComponent
       }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LugarOperativoRoutingModule {
}
