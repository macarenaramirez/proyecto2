import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Usuario1ListComponent} from './usuario1-list/usuario1-list.component';
import {Usuario1Component} from './usuarioss.component';
import {UsuarioFormNewComponent} from './usuario1-form-new/usuario1-form-new.component';
import {UsuarioFormEditComponent} from './usuario1-form-edit/usuario1-form-edit.component';

const routes: Routes = [
  {
    path: '',
    component: Usuario1Component,
    children: [
      {
        path: 'menu-sima/panel-de-control/usuarios.1/list',
        component: Usuario1ListComponent
      },
      {
        path: 'menu-sima/panel-de-control/usuarios/form-new',
        component: UsuarioFormNewComponent
      },
      {
        path: 'menu-sima/panel-de-control/usuarios/form-edit',
        component: UsuarioFormEditComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Usuario1RoutingModule {
}
