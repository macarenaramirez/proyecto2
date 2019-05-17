import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Respuesta} from '../../models/new/respuesta.model';
import {UserNameModel} from '../../models/new/userName.model';
import {LugarOperativoModel} from '../../models/new/lugarOperativo.model';
import {BodyUserNameModelLugarOperativoModel} from '../../models/new/bodyUserNameModelLugarOperativoModel.model';

@Injectable({
  providedIn: 'root'
})
export class SimaBackendLugarOperativoServiceService {

  readonly rootUrl = '/sima-backend/api/lugar-operativo/';

  private headers: HttpHeaders;

  bodyUserNameModelLugarOperativoModel = new class implements BodyUserNameModelLugarOperativoModel {
    userNameModel: UserNameModel;
    lugarOperativoModel: LugarOperativoModel;
  };

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
  }

  listAll(userNameModel: UserNameModel) {
    this.headers.append('Content-Type', 'application/json');
    return this.http.post<Respuesta>(this.rootUrl + `listAll`,
      userNameModel, {headers: this.headers});
  }

  findAll(page: number, size: number, campo: string, orden: string, userNameModel: UserNameModel) {
    this.headers.append('Content-Type', 'application/json');
    return this.http.post<Respuesta>(this.rootUrl + `findAll?page=${page}&size=${size}&sort=${campo},${orden}`,
      userNameModel, {headers: this.headers});
  }


  create(lugarOperativoModel: LugarOperativoModel, userNameModel: UserNameModel) {
    console.log(JSON.stringify(lugarOperativoModel));
    this.bodyUserNameModelLugarOperativoModel.userNameModel = userNameModel;
    this.bodyUserNameModelLugarOperativoModel.lugarOperativoModel = lugarOperativoModel;
    this.headers.append('accept', '*/*');
    this.headers.append('Content-Type', 'application/json');
    return this.http.post<Respuesta>(this.rootUrl + `create`, this.bodyUserNameModelLugarOperativoModel,
      {headers: this.headers});
  }
  edit(lugarOperativoModel: LugarOperativoModel, userNameModel: UserNameModel) {
    this.bodyUserNameModelLugarOperativoModel.userNameModel = userNameModel;
    this.bodyUserNameModelLugarOperativoModel.lugarOperativoModel = lugarOperativoModel;
    this.headers.append('accept', '*/*');
    this.headers.append('Content-Type', 'application/json');
    return this.http.post<Respuesta>(this.rootUrl + `edit`, this.bodyUserNameModelLugarOperativoModel,
      {headers: this.headers});
}
}