import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, MenuController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formulariologin: FormGroup;

  public usuarioSubcription = new Subscription();


  constructor(public fb: FormBuilder,
    public alertController: AlertController, public navControl: NavController
    ,public menuCtrl: MenuController,
    public usuarioServicios:UsuarioService,
    private router: Router) {

    this.formulariologin = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),

    })
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }

  async Ingresar() {

    var f = this.formulariologin.value;

    this.usuarioServicios.autenticar(f.nombre).subscribe(res => {
      console.log(res[0]);
       if (res[0].nombre === f.nombre && res[0].password ===f.password){
         this.router.navigate(['/inicio']);
       }
    });
    // this.usuarioSubcription = this.usuarioServicios.autenticar$().subscribe((res) => {
    //   console.log("hola mundo");

    // });



    // var usuario = JSON.parse(localStorage.getItem('usuario'));

    // if (usuario.nombre == f.nombre && usuario.password == f.password) {
    //   this.navControl.navigateRoot('/inicio');
    // } else {
    //   const alert = await this.alertController.create({
    //     header: 'Incorrecto',
    //     message: 'Ingrese los datos correspondientes',
    //     buttons: ['Aceptar'],

    //   });

    //   await alert.present();
    // }
  }
}
