import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Consulta } from '../models/consulta.model';

@Injectable({
  providedIn: 'root'
})

export class ConsultaService {

  constructor(private http: HttpClient) { }

  public getConsultas() : Observable<Consulta[]> {
    return this.http.get<Consulta[]>(`${environment.server_ws}/Consultas`);
  }
  
}