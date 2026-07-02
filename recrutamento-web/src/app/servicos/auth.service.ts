import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  
  constructor() {}

  login(perfil: 'ADMIN' | 'CANDIDATO') {
    const usuario = {
      id: perfil === 'ADMIN' ? 1 : 2, 
      nome: perfil === 'ADMIN' ? 'Administrador' : 'Colaborador Teste',
      perfil: perfil
    };
    localStorage.setItem('usuario', JSON.stringify(usuario));
    window.location.reload(); 
  }

  isLogado(): boolean {
    return localStorage.getItem('usuario') !== null;
  }

  isAdmin(): boolean {
    const user = this.getUsuario();
    return user && user.perfil === 'ADMIN';
  }

  getUsuario() {
    const data = localStorage.getItem('usuario');
    return data ? JSON.parse(data) : null;
  }

  logout() {
    localStorage.removeItem('usuario');
    window.location.reload();
  }
}