import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioBack, UsuarioBackForm, Usuario } from '../interfaces/interfaceData';

@Injectable({
  providedIn: 'root'
})
export class ServicesDataService {

  private usuarios = 'http://localhost:8080/usuario';
  

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<any> {
    const url = `${this.usuarios}`; 
    return this.http.get<any>(url);
  }

  agregarUsuario(usuario: UsuarioBackForm): Observable<any> {
    return this.http.post<any>(this.usuarios, usuario);
  }

  eliminarUsuario(usuario: number): Observable<any> {
    return this.http.delete<any>(this.usuarios + '/' + usuario);
  }
}
