import { Component, OnInit } from '@angular/core';
import { Peliculavideojuegos } from '../models/peliculavideojuegos';
import { PeliculayvideojuegosService } from '../services/peliculayvideojuegos.service';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.page.html',
  styleUrls: ['./calificaciones.page.scss'],
})
export class CalificacionesPage implements OnInit {

  public listaPV: Peliculavideojuegos [] = [];

  constructor( public contenidoServicios: PeliculayvideojuegosService) { }

  ngOnInit() {
    this.contenidoServicios.getAll$().subscribe((data: [])=> {
      this.listaPV = data;
    });

    this.contenidoServicios.getAll().subscribe((res)=>{
      console.log('cargando.....');
    });

  }

  eliminar(id){
    this.contenidoServicios.eliminar(id).subscribe(res => {
      this.contenidoServicios.getAll().subscribe((res)=>{
        console.log('cargando.....');
      });
    });


  }

}
