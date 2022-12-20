import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Peliculavideojuegos } from '../models/peliculavideojuegos';
import { PeliculayvideojuegosService } from '../services/peliculayvideojuegos.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {

  formularioEditar: FormGroup;
  public contenido: Peliculavideojuegos;

  private id: string;
  constructor(public fb: FormBuilder, private rutaActiva: ActivatedRoute,private contenidoService: PeliculayvideojuegosService) {
    this.formularioEditar = this.fb.group({
      'titulo': new FormControl(null,Validators.required),
      'descripcion': new FormControl(null,Validators.required),
      'tipo': new FormControl(null,Validators.required),
    })
  }

  ngOnInit() {
    this.id = this.rutaActiva.snapshot.paramMap.get('id');
    this.contenidoService.get( this.id).subscribe(res => {
      console.log(res);
      this.formularioEditar.setValue({titulo: res.titulo, descripcion: res.descripcion, tipo: res.tipo})
    });


  }
  onUpdate(){

    var f = this.formularioEditar.value;
    let data = {id: this.id, titulo: f.titulo, descripcion: f.descripcion, tipo: f.tipo};


    console.log('update');
    console.log( this.id);
    this.contenidoService.update(data).subscribe(res => {
      this.contenidoService.getAll().subscribe();
    });

  }

}
