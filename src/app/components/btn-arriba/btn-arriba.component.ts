import { Component } from '@angular/core';

@Component({
  selector: 'app-btn-arriba',
  templateUrl: './btn-arriba.component.html',
  styleUrls: ['./btn-arriba.component.css']
})
export class BtnArribaComponent {

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Esto proporciona un desplazamiento suave
    });
  }
}
