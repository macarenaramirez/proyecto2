import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {SimaBackendSessionService} from '../../../../../../services/sima-backend/sima-backend-session.service';
import {UserNameModel} from '../../../../../../models/new/userName.model';
import {UsuarioModel} from '../../../../../../models/new/usuario.model';
import {LugarOperativoModel} from '../../../../../../models/new/lugarOperativo.model';
import {SimaBackendUsuarioServiceService} from '../../../../../../services/sima-backend/sima-backend-usuario.service';
import {SimaBackendLugarOperativoServiceService} from '../../../../../../services/sima-backend/sima-backend-lugar-operativo.service';

@Component({
  selector: 'app-lugar-operativo-form-edit',
  templateUrl: './lugar-operativo-form-edit.component.html',
  styleUrls: ['./lugar-operativo-form-edit.component.css']
})
export class LugarOperativoFormEditComponent implements OnInit {
  titulo: string;
  lista: string[];

  rForm: FormGroup;
  name = '';

  userNameModel = new class implements UserNameModel {
    username: string;
  };

    lugarOperativoEdit = new class implements LugarOperativoModel {
      id: number;
      nombre: string;
      codLugar: number;
  };

  error = false;
  mensajeError: string;

  lugaresOperativos: Array<LugarOperativoModel> = [];

  constructor(private simaBackendService: SimaBackendSessionService,
              private fb: FormBuilder,
              private simaBackendUsuarioServiceService: SimaBackendUsuarioServiceService,
              private simaBackendLugarOperativoServiceService: SimaBackendLugarOperativoServiceService,
              private router: Router) {
  }

  ngOnInit() {
    this.userNameModel.username = localStorage.getItem('username');
    const datosRetorno = this.router.getNavigatedData();
    this.lugarOperativoEdit = datosRetorno[0];
    console.log('aaa'+ JSON.stringify(this.lugarOperativoEdit));
    this.titulo = 'Editar Lugar Operativo';
    this.lista = ['Menu Sima', 'Panel de Control', 'Lugar Operativo'];
    this.lista.push(this.titulo);
    this.rForm = this.fb.group({
      'nombre': [this.lugarOperativoEdit.nombre, Validators.compose([Validators.required])],
      'codLugar': [this.lugarOperativoEdit.codLugar, Validators.compose([Validators.required])]
    });
    this.getListLugarOperativo();
  }

  save(post) {
     console.log(JSON.stringify(post));
    this.lugarOperativoEdit.nombre = post.nombre;
    this.lugarOperativoEdit.codLugar = post.codLugar;
    console.log(JSON.stringify(this.lugaresOperativos));
    this.simaBackendLugarOperativoServiceService.edit(this.lugarOperativoEdit, this.userNameModel).subscribe(res => {
        console.log(res);
        if (res.status) {
          this.back();
        } else {
          this.error = true;
          this.mensajeError = res.message;
        }
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      });
  }

  getListLugarOperativo() {
    this.simaBackendLugarOperativoServiceService.listAll(this.userNameModel).subscribe(
      res => {
        if (res.status) {
          console.log(res);
          this.lugaresOperativos = res.object;
        } else {
          window.alert('Ocurrio un problema');
        }
      },
      (errors) => {
        window.alert(errors.message);
      }
    );
  }


  back() {
    this.router.navigateByData({
      url: ['menu-sima/panel-de-control/lugar-operativo/list'],
      data: ['']
    });
  }

}
