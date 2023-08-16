import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prueba-zoom',
  templateUrl: './prueba-zoom.component.html',
  styleUrls: ['./prueba-zoom.component.css', '../../app.component.css']
})
export class PruebaZoomComponent {

  constructor(private router: Router){

  }

  @Input()
  titulo?: string;

  @Input()
  foto?: string;

  @Input()
  descripcion?: string;

  ngOnInit(): void {
    // Llama a una función de inicialización para establecer el factor de escala inicial para cada imagen según su clase
    this.inicializarEscalasImagenes();
  }
  
  inicializarEscalasImagenes(): void {
    const mediaImages = document.getElementsByClassName('media-img') as HTMLCollectionOf<HTMLImageElement>;
    
    // Recorre cada imagen y establece su factor de escala inicial según su clase
    for (let index = 0; index < mediaImages.length; index++) {
      const element = mediaImages[index];
      const className = element.className; // Obtén el nombre de la clase del elemento de imagen
  
      // Establece el factor de escala inicial según el nombre de clase
      let factorEscalaInicial = 1.0; // Establece un valor predeterminado
  
      if (className.includes('media-img')) {
        factorEscalaInicial = 0.6; // Establece el factor de escala inicial para esta clase
      }
  
      // Aplica la escala inicial a la imagen
      element.style.transform = `scale(${factorEscalaInicial})`;
    }
  }
  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    const mediaImg = document.getElementsByClassName('media-img');

    for (let index = 0; index < mediaImg.length; index++) {


      const element = mediaImg[index] as HTMLImageElement;

      const scrollPosition = window.scrollY;

      // Calcula la altura del área visible del viewport
      const viewportHeight = window.innerHeight;

      // Obtiene la posición vertical de la imagen
      const imgPosition = element.getBoundingClientRect().top;

      // Calcula el punto en el que la parte superior de la imagen es visible en el viewport
      const imgVisibleThreshold = viewportHeight * 0.5;

      // Calcula la altura total de la imagen
      const imgHeight = element.offsetHeight;

      // Calcula la distancia desde la parte superior de la imagen hasta el punto de visibilidad
      const imgVisibleDistance = Math.max(0, imgPosition - imgVisibleThreshold);

      // Calcula el porcentaje de escala inverso en función de la distancia visible
      const scalePercentage = Math.max(0.75, 1 - (imgVisibleDistance / imgHeight));

      // Aplica el escalado proporcional inverso
      const inverseScalePercentage = 1 / scalePercentage;

      // Aplica el escalado proporcional inverso para achicar la imagen
      element.style.transform = `scale(${0.485 * inverseScalePercentage})`; // Cambiar el factor de escala inicial según tus necesidades
      const scaleValue = parseFloat(element.style.transform.replace('scale(', '').replace(')', '')); // Convierte la cadena a un float
      //console.log(mediaImg.style.transform.valueOf());
      //console.log(parseInt(mediaImg.style.transform));
      //console.log(scaleValue);

      // Verifica si la imagen ha alcanzado su tamaño más pequeño
      if (scaleValue <= 0.5) {
        // Cambia el valor de opacidad de una clase
        const targetElement = document.querySelectorAll('.myTitle');
        const targetElement1 = document.querySelectorAll('.myDescription');
        const targetElement2 = document.querySelectorAll('.nuestrosProductos');

        const elementsArray = Array.from(targetElement);

        targetElement.forEach((element: Element) => {
          element.setAttribute('style', 'opacity: 1',);
          // Modifica otros estilos según sea necesario para la clase1
        });

        targetElement1.forEach((element: Element) => {
          element.setAttribute('style', 'opacity: 1');
          // Modifica otros estilos según sea necesario para la clase1
        });
        // for (let index = 0; index < targetElement2.length; index++) {
        //   const element = targetElement2[index];
          
        //   element.setAttribute('style', 'border: 1px solid rgba(154,82,97,.3);');
        // }

      } else {
        // Restaura el valor de opacidad de la clase a su estado inicial
        const targetElement = document.querySelectorAll('.myTitle');
        const targetElement1 = document.querySelectorAll('.myDescription');
        const targetElement2 = document.getElementsByClassName('.nuestrosProductos');
        const elementsArray = Array.from(targetElement);

        targetElement.forEach((element: Element) => {
          element.setAttribute('style', 'opacity: 0');
          // Modifica otros estilos según sea necesario para la clase1
        });

        targetElement1.forEach((element: Element) => {
          element.setAttribute('style', 'opacity: 0');
          // Modifica otros estilos según sea necesario para la clase1
        });

        // for (let index = 0; index < targetElement2.length; index++) {
        //   const element = targetElement2[index];
          
        //   element.setAttribute('style', 'border: 0px solid rgba(154,82,97,.3);');
        // }

        // targetElement.style.opacity = '1';
        // console.log("En el 1: ",targetElement.style.opacity);
      }
    }
  }

  avanceObra() : void{
    this.router.navigate(['avance']);
  }

}
