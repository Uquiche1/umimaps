import { Component } from '@angular/core';

@Component({
  selector: 'app-mapas-rutas',
  templateUrl: './mapas-rutas.component.html',
  styleUrls: ['./mapas-rutas.component.scss']
})
export class MapasRutasComponent {
  // Coordenadas del mapa y zoom
  latitud = -12.046374;
  longitud = -77.042793;
  zoom = 10;

  // Lógica para tomar la ruta
  tomarRuta(ruta: string) {
    // Aquí puedes implementar la lógica para obtener las coordenadas de la ruta desde la base de datos
    // y mostrarlas en el mapa

    // Por ejemplo, si tienes un campo "coordenadas" en la ruta almacenada en la base de datos
    // puedes hacer lo siguiente:

    if (ruta === 'Ruta de los Tesoros Incas') {
      // Asumiendo que 'Ruta de los Tesoros Incas' es una ruta almacenada en la base de datos
      // puedes obtener las coordenadas de la ruta y actualizar los valores de las variables latitud y longitud

      // Ejemplo:
      this.latitud = -13.163141;
      this.longitud = -72.544963;
    } else if (ruta === 'Ruta de la Selva Amazónica') {
      // Otras rutas...
    }
  }
}
