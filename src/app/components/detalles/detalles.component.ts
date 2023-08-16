import { Component } from '@angular/core';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent {
  onImageMouseOver(event: MouseEvent) {
    const target = event.target as HTMLImageElement;
    target.style.transform = 'scale(1.2)';
  }

  onImageMouseOut(event: MouseEvent) {
    const target = event.target as HTMLImageElement;
    target.style.transform = 'scale(1)';
  }
  ngOnInit() {
    // Establecemos la primera imagen como predeterminada al cargar el componente.
    this.imagenSeleccionada = this.imagenes[0];
  }

  imagenes = [
    { nombre: 'Imagen 1', url: 'https://terraz.com.ar/content/prototipos/b4982d92-73f1-447e-ae55-6866469b45f1.jpg' },
    { nombre: 'Imagen 2', url: 'https://terraz.com.ar/content/prototipos/23ebb402-d1b6-4c46-b8ce-5c550b69d5bb.jpg' },
    { nombre: 'Imagen 3', url: 'https://terraz.com.ar/content/prototipos/6538e98a-f72a-45f1-a5d0-457de9bbc6a7.jpg' },
    { nombre: 'Imagen 4', url: 'https://terraz.com.ar/content/prototipos/b2845ffb-4acd-4918-9395-6d62a75ec361.jpg' },
    { nombre: 'Imagen 5', url: 'https://terraz.com.ar/content/prototipos/c68f76e6-6ee9-415d-98a0-f8d0a20b44c6.jpg' },
    { nombre: 'Imagen 6', url: 'https://terraz.com.ar/content/prototipos/ab1e0a71-5e09-4903-a80a-8941d604acab.jpg' },
    // Agrega más imágenes con su nombre y URL correspondiente
  ];

  imagenSeleccionada: { nombre: string, url: string } | null = null;

  mostrarImagen(imagen: { nombre: string, url: string }) {
    this.imagenSeleccionada = imagen;
  }
}
