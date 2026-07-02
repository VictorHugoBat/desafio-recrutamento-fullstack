import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


export interface Vaga  {
  id?: number;
  titulo: string;
  descricao: string;
  requisitos: string;
  status: string;
}

 @Injectable({
  providedIn: 'root'
})
export class VagaService {
  
  private apiUrl = 'http://localhost:8080/api/vagas';

  private vagaSelecionadaSource = new Subject<Vaga>();
  vagaSelecionada$ = this.vagaSelecionadaSource.asObservable();

  constructor(private http: HttpClient) { }

   setVagaParaEdicao(vaga: Vaga) {
    this.vagaSelecionadaSource.next(vaga);
  }

  listarTodas(): Observable<Vaga[]> {
    return this.http.get<Vaga[]>(this.apiUrl);
  }

  salvar(vaga: Vaga): Observable<Vaga> {
    return this.http.post<Vaga>(this.apiUrl, vaga);
  }

  excluir(id: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  atualizar(id: number, vaga: Vaga): Observable<Vaga> {
  return this.http.put<Vaga>(`${this.apiUrl}/${id}`, vaga);
  }

}