import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http'
import { Peliculavideojuegos } from '../models/peliculavideojuegos';
import { Observable, Subject } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculayvideojuegosService {

  public allContenido: Peliculavideojuegos [] = [];
  public allContenido$ = new Subject<Peliculavideojuegos[]>();
  public contenido: Peliculavideojuegos;

  public urlServer = environment.url + '/peliculavideojuegos';
  constructor(
    public http: HttpClient
  ) {

  }
  create(data: Peliculavideojuegos){
    return this.http.post<Peliculavideojuegos>(this.urlServer,data).subscribe();
  }

  eliminar(data: any){
    return this.http.delete<Peliculavideojuegos>(this.urlServer+`/${data}`);

  }

  getAll(): Observable <any> {
    this.allContenido = [];
    return this.http.get<Peliculavideojuegos []>(this.urlServer)
    .pipe(
      map((res: any[])=> {
        res.forEach((item: any) => {
          this.contenido = new Peliculavideojuegos();
          this.contenido.setValues(item);
          this.allContenido.push(this.contenido);
        });
        this.allContenido$.next(this.allContenido);
      })
    );
  }

  getAll$(): Observable<Peliculavideojuegos []>{
    return this.allContenido$.asObservable();
  }

  get(id: string): Observable <any> {
    return this.http.get<Peliculavideojuegos>(this.urlServer +`/${id}`)
  }

  update(data: any): Observable <any> {
    return this.http.put<Peliculavideojuegos []>(this.urlServer+`/${data.id}`,data)
  }
}

