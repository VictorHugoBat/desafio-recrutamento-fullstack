# Sistema de Recrutamento Interno - Desafio Full Stack

Este projeto é uma aplicação completa para gestão de recrutamento interno, permitindo que administradores gerenciem vagas e colaboradores se candidatem a oportunidades, com filtros inteligentes e painéis de acompanhamento.

## 🛠️ Tecnologias Utilizadas
- **Backend:** Java 17, Spring Boot 3.3.1, Spring Data JPA, Spring Security.
- **Frontend:** Angular 18 (Standalone Components), RxJS, HTML5/SCSS.
- **Banco de Dados:** PostgreSQL 13.
- **Infraestrutura:** Docker e Docker Compose.

## 🚀 Requisitos Implementados
- [x] **Autenticação e Autorização:** Controle de acesso baseado em perfis (ADMIN e CANDIDATO).
- [x] **Gestão de Vagas:** CRUD completo (Criação, Listagem, Edição e Exclusão).
- [x] **Candidaturas:** Sistema de inscrição vinculando candidato e vaga.
- [x] **Filtros Avançados:** Pesquisa reativa por título, descrição e requisitos técnicos.
- [x] **Notificações:** Simulação de disparos de e-mail via logs no backend (System.out).
- [x] **Painel do Candidato (BÔNUS):** Área exclusiva para o colaborador acompanhar status e feedbacks.
- [x] **Avaliação de Candidatos (BÔNUS):** Interface para o RH aprovar/reprovar e dar feedback.
- [x] **Docker:** Banco de dados conteinerizado para facilitar o setup.
- [x] **Testes:** Implementação de testes unitários no backend.

## 🏃 Como Rodar a Aplicação

### 1. Banco de Dados (Docker)
Na raiz do projeto, execute:
```bash
docker-compose up -d


depois localhost:4200 para acessar o front

backend localhost:8080