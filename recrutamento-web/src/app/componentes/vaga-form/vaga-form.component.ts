import { Component, OnInit } from '@angular/core'; // Adicionei OnInit
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { Vaga, VagaService } from '../../servicos/vaga.service';

@Component({
  selector: 'app-vaga-form',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './vaga-form.component.html',
  styleUrl: './vaga-form.component.scss'
})
export class VagaFormComponent implements OnInit { // Implementando OnInit

  novaVaga: Vaga = {
    titulo: '',
    descricao: '',
    requisitos: '',
    status: 'ABERTA'
  };

  constructor(private service: VagaService) {}

  ngOnInit(): void {

     this.service.vagaSelecionada$.subscribe(vaga => {
    this.novaVaga = { ...vaga };
    console.log('Vaga recebida para edição:', vaga);
  });
}

  salvarVaga() {
    if (this.novaVaga.id) {
      // Caso tenha ID, atualiza
      this.service.atualizar(this.novaVaga.id, this.novaVaga).subscribe({
        next: () => {
          alert('Vaga ATUALIZADA com sucesso!');
          this.limparFormulario();
        },
        error: (err) => alert('Erro ao atualizar vaga.')
      });
    } else {
      // Caso NÃO tenha ID, cria nova
      this.service.salvar(this.novaVaga).subscribe({
        next: () => {
          alert('Vaga CADASTRADA com sucesso!');
          this.limparFormulario();
        },
        error: (err) => alert('Erro ao cadastrar vaga.')
      });
    }
  }

  limparFormulario() {
    this.novaVaga = { titulo: '', descricao: '', requisitos: '', status: 'ABERTA' };
    window.location.reload(); 
  }
} // Agora fechado corretamente