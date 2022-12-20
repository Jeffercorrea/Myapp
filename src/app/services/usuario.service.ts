import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http'
import { Usuario } from '../models/usuario';
import { Login } from '../models/login';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public urlServer = environment.url + '/usuarios';
  public usuario = new Usuario();
  public usuario$ = new Subject<Usuario>()
  constructor(
    public http: HttpClient
  ) {

  }
  create(data: Login){
    return this.http.post<Usuario>(this.urlServer,data).subscribe();
  }

  get(id: string): Observable <any> {
    return this.http.get<Usuario>(this.urlServer +`/${id}`)
  }

  autenticar$(): Observable<any>{
    return this.usuario$.asObservable();
  }
  autenticar(username: string): Observable<any>{
    return this.http.get<Usuario>(this.urlServer + `/findByUsername/${username}`)
  }
}

