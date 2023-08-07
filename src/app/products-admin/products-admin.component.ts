import { Component, OnInit,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
// Import AngularFirestore from '@angular/fire/firestore'

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.scss'],
})
export class ProductsAdminComponent implements OnInit {
  constructor(private el: ElementRef,private router: Router, private location:Location) {}

  tomarRuta(ruta: string) {
    // Your implementation here
  }
  scrollUp() {
    // Desplazar hacia arriba 200 píxeles
    this.el.nativeElement.querySelector('.route-cards').scrollBy(0, -200);
  }

  scrollDown() {
    // Desplazar hacia abajo 200 píxeles
    this.el.nativeElement.querySelector('.route-cards').scrollBy(0, 600);
  }
  avanzar() {
    // Agregar lógica para avanzar a la siguiente sección o acción
    // Aquí redireccionamos a la página del perfil (suponiendo que la ruta se llama '/perfil')
    this.router.navigate(['/profile']);
  }

  salir() {
    // Agregar lógica para salir o regresar a la página anterior
    // Aquí redireccionamos a la página de login (suponiendo que la ruta se llama '/login')
    this.router.navigate(['/login']);
  }
  goBack() {
    this.location.back();
  }
  ngOnInit() {}
}
