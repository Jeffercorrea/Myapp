import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Peliculavideojuegos } from '../models/peliculavideojuegos';
import { PeliculayvideojuegosService } from '../services/peliculayvideojuegos.service';

@Component({
  selector: 'app-cargar',
  templateUrl: './cargar.page.html',
  styleUrls: ['./cargar.page.scss'],
})
export class CargarPage implements OnInit {

  formularioSubir: FormGroup;

  public contenido: Peliculavideojuegos;


  constructor(public fb: FormBuilder, public navControl:NavController , public peliculayvideojuegosService:PeliculayvideojuegosService) {
    this.formularioSubir = this.fb.group({
      'titulo': new FormControl(null,Validators.required),
      'descripcion': new FormControl(null,Validators.required),
      'tipo': new FormControl(null,Validators.required),
    })
   }

  ngOnInit() {
  }

  subir(){

    var f = this.formularioSubir.value;
    let data = {titulo: f.titulo, descripcion: f.descripcion, tipo: f.tipo};

    console.log('OK');
    this.contenido = new Peliculavideojuegos();
    this.contenido.setValues(data);
    this.peliculayvideojuegosService.create(this.contenido);

    this.navControl.navigateRoot('/inicio');
  }

}
