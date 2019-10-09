import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsuarioListComponent} from './dashboard-list/dashboard-list.component';
import {UsuarioComponent} from './dashboard.component';
import {UsuarioFormNewComponent} from './dashboard-form-new/dashboard-form-new.component';
import {UsuarioFormEditComponent} from './dashboard-form-edit/dashboard-form-edit.component';

const routes: Routes = [
  {
    path: '',
    component: UsuarioComponent,
    children: [
      {
        path: 'menu-sima/panel-de-control/dashboards/list',
        component: UsuarioListComponent
      },
      {
        path: 'menu-sima/panel-de-control/dashboards/form-new',
        component: UsuarioFormNewComponent
      },
      {
        path: 'menu-sima/panel-de-control/dashboards/form-edit',
        component: UsuarioFormEditComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
