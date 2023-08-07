import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router,private location: Location) {}
   
  retroceder() {
    // Agregar la lógica para retroceder, por ejemplo, redirigir a otra página
    this.router.navigate(['/login']);
    // utilizando el Router de Angular
  }
  avanzar() {
    // Agregar lógica para avanzar a la siguiente sección o acción
    // Aquí redireccionamos a la página del perfil (suponiendo que la ruta se llama '/perfil')
    this.router.navigate(['/admin/products']);
  }
  agradecimiento(){
    this.router.navigate(['/about']);
  }
  goBack() {
    this.location.back();
  }
}
