import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Usuario } from './models/usuario';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public userName = JSON.parse(localStorage.getItem('usuario'));
  b: boolean = false;
  public usuarios: Usuario[] = [];


  public appPages1= [
    { title: 'Inicio ', url: '/inicio', icon: 'home' },
    { title: 'Mis contenidos', url: '/calificaciones', icon: 'star-half' },
    { title: 'Peliculas', url: '/peliculas', icon: 'film' },
    { title: 'Videojuegos ', url: '/videojuegos', icon: 'game-controller' },
    { title: 'cerrar sesion ', url: '/login', icon: 'log-out' },
  ];
  public appPages = [
    { title: 'Inicio ', url: '/inicio', icon: 'home' },
    { title: 'Mis contenidos', url: '/calificaciones', icon: 'star-half' },
    { title: 'Peliculas', url: '/peliculas', icon: 'film' },
    { title: 'Videojuegos ', url: '/videojuegos', icon: 'game-controller' },
    { title: 'Subir', url: '/cargar', icon: 'arrow-up-circle' },
    { title: 'cerrar sesion ', url: '/login', icon: 'log-out' },
  ];



  constructor(public navControl: NavController) {
    let usuario = new Usuario();
    let data = {id: 1, username: 'user', email:'@user' }
    usuario.setValues(data);
  }




  logout(){
    this.navControl.navigateRoot('/login');
  }
}

