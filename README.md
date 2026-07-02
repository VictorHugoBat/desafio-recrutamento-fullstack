# 🚀 Sistema de Recrutamento Interno - Desafio Full Stack

Esta é uma aplicação robusta desenvolvida para facilitar o processo de recrutamento interno em empresas. O sistema permite que administradores gerenciem vagas e que colaboradores pesquisem oportunidades e realizem candidaturas com acompanhamento em tempo real.

## 🛠️ Stack Tecnológica

- **Backend:** Java 17, Spring Boot 3.3.1, Spring Data JPA, Spring Security.
- **Frontend:** Angular 18 (Arquitetura Standalone), RxJS, SCSS.
- **Banco de Dados:** PostgreSQL 13.
- **Containerização:** Docker & Docker Compose.
- **Testes:** JUnit 5 e MockMvc.

## ✨ Funcionalidades Implementadas

### 🛡️ Autenticação e Autorização (RBAC)
- Sistema de controle de acesso baseado em perfis: **ADMINISTRADOR** e **COLABORADOR**.
- Interface adaptativa: botões de gestão e formulários são ocultados automaticamente para perfis sem permissão.

### 📝 Gestão de Vagas (CRUD Completo)
- Cadastro, listagem, edição e exclusão de vagas.
- **Diferencial Técnico:** Implementado *Cascade Delete* e *Orphan Removal*, garantindo que ao excluir uma vaga, todas as candidaturas vinculadas sejam removidas automaticamente do banco.
- **Edição Inteligente:** O sistema gerencia o estado da aplicação via RxJS (Subjects) para carregar dados entre componentes sem refresh de página.

### 🔍 Pesquisa e Filtros
- Filtro reativo que permite busca por **Título**, **Descrição** ou **Requisitos Técnicos** em tempo real.

### 🤝 Sistema de Candidaturas
- Registro de interesse persistido no banco de dados, criando um relacionamento Many-to-One entre Usuários e Vagas.
- **Notificações:** Simulação de disparos de e-mail via logs no servidor Java no momento da inscrição.

### 📊 Painéis Exclusivos (BÔNUS)
- **Painel do Candidato:** Área onde o colaborador visualiza o status (Pendente, Aprovado, Reprovado) e o feedback detalhado de suas inscrições.
- **Painel de Avaliação:** Interface exclusiva do Admin para analisar currículos, alterar o status da candidatura e registrar feedbacks técnicos.

---

## 🐳 Como Executar via Docker (Recomendado)

O projeto está totalmente configurado para subir todo o ecossistema com um único comando:

```bash
docker-compose up --build
```

## 🔗 Links de Acesso

| Serviço | Endereço |
|---------|----------|
| 🌐 Frontend | http://localhost:4200 |
| ⚙️ Backend (API) | http://localhost:8080/api/vagas |
| 📖 Swagger/OpenAPI | http://localhost:8080/swagger-ui/index.html |
| 🗄️ PostgreSQL | localhost:5433 |