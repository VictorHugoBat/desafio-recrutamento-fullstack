import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VagaListaComponent } from './componentes/vaga-lista/vaga-lista.component'; 
import { VagaFormComponent } from './componentes/vaga-form/vaga-form.component';
import { AuthService } from './servicos/auth.service'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule,
    VagaListaComponent,
    VagaFormComponent 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'recrutamento-web';


  constructor(public authService: AuthService) {}
}