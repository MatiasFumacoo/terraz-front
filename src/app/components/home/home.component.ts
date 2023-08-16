import * as AOS from 'aos';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../app.component.css']
})
export class HomeComponent {
  title = 'Prueba';

  public listaProductos = [ { 
                              title: "AVANCE DE OBRAS", 
                              foto: "https://assets.website-files.com/6193c9dbb809764879877eec/619b900211243f85f8489ee9_media_illustr.png", 
                              descripcion: "En esta sección podrás ver los avances de nuestros desarrollos." 
                            },
                            {
                              title: "TZ HOME", 
                              foto: "https://assets.website-files.com/6193c9dbb809764879877eec/619b900211243f85f8489ee9_media_illustr.png", 
                              descripcion: "En esta sección podrán ver todas las variantes posibles de nuestros modelos de construcción tradicional." 
                            },
                            {
                              title: "TZ LOT", 
                              foto: "https://assets.website-files.com/6193c9dbb809764879877eec/619b900211243f85f8489ee9_media_illustr.png", 
                              descripcion: "Pensada para aquellos inversores que buscan una renta superior a plazos mayores invirtiendo en loteos en desarrollo. Nuestro equipo de asesores se dedica exclusivamente a la búsqueda de lugares." 
                            }
                          ]
 

    ngOnInit(){
      AOS.init()
      window.addEventListener('load',AOS.refresh)
    }
}
