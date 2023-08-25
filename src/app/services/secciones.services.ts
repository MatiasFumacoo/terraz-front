import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Seccion } from '../models/seccion.model';

@Injectable({
  providedIn: 'root'
})

export class SeccionesService {

  constructor(private http: HttpClient) { }

  public getSecciones() : Observable<Seccion[]> {
    return this.http.get<Seccion[]>(`${environment.server_ws}/Secciones`);
  }
  
}