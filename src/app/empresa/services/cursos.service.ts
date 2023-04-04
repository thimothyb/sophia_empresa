import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {listacursosI} from '../modelos/listacursos.interface';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

private apiUrl: string = 'https://sophia-lms-api.azurewebsites.net/api/Organization'

  constructor( private http: HttpClient) { }


  buscarCurso (): Observable<listacursosI[]> {
    let direccion= this.apiUrl;
 
   return this.http.get<listacursosI[]>(direccion);
  } 
  



}
