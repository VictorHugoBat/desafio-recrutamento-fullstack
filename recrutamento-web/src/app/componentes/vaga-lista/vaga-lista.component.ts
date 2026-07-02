import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Vaga, VagaService } from '../../servicos/vaga.service';
import { AuthService } from '../../servicos/auth.service';

@Component({
  selector: 'app-vaga-lista',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vaga-lista.component.html',
  styleUrl: './vaga-lista.component.scss'
})
export class VagaListaComponent implements OnInit {
  vagas: Vaga[] = [];
  termoBusca: string = '';
  
  // Propriedades para os BÔNUS
  minhasCandidaturas: any[] = []; // Painel do Candidato
  todasCandidaturas: any[] = [];  // Painel de Avaliação (Admin)

  constructor(
    public service: VagaService, 
    public authService: AuthService,
    private http: HttpClient 
  ) {}

  ngOnInit(): void {
    this.carregarVagas();
    this.carregarCandidaturas();
  }

  carregarVagas() {
    this.service.listarTodas().subscribe(dados => this.vagas = dados);
  }

  // BÔNUS: Carrega dados para os painéis
  carregarCandidaturas() {
    const usuario = this.authService.getUsuario();
    if (!usuario) return;

    this.http.get<any[]>('http://localhost:8080/api/candidaturas').subscribe(dados => {
      if (this.authService.isAdmin()) {
        this.todasCandidaturas = dados;
      } else {
        // Filtra apenas as candidaturas do usuário logado
        this.minhasCandidaturas = dados.filter(c => c.candidato.id === usuario.id);
      }
    });
  }

  get vagasFiltradas() {
    const termo = this.termoBusca.toLowerCase();
    return this.vagas.filter(v => 
      v.titulo.toLowerCase().includes(termo) ||
      v.requisitos.toLowerCase().includes(termo)
    );
  }

  candidatar(vaga: Vaga) {
    const usuario = this.authService.getUsuario();
    const payload = {
      candidato: { id: usuario.id },
      vaga: { id: vaga.id },
      status: 'PENDENTE' // Status inicial para o bônus
    };

    this.http.post('http://localhost:8080/api/candidaturas', payload).subscribe({
      next: () => {
        alert(`Candidatura para "${vaga.titulo}" enviada!`);
        this.carregarCandidaturas(); // Atualiza o painel na hora
      },
      error: () => alert('Erro ao processar candidatura.')
    });
  }

  // BÔNUS: Avaliação pelo Admin
  avaliar(candidaturaId: number) {
    const feedback = prompt("Digite o feedback para o candidato:");
    const status = prompt("Novo Status (APROVADO/REPROVADO):")?.toUpperCase();

    if (status) {
      this.http.put(`http://localhost:8080/api/candidaturas/${candidaturaId}`, { status, feedback }).subscribe({
        next: () => {
          alert("Avaliação registrada!");
          this.carregarCandidaturas();
        }
      });
    }
  }

  prepararEdicao(vaga: Vaga) {
    this.service.setVagaParaEdicao(vaga);
    window.scrollTo(0, 0); 
  }

  excluirVaga(id: number) {
    if(confirm("Deseja realmente excluir esta vaga?")) {
      this.service.excluir(id).subscribe(() => this.carregarVagas());
    }
  }
}