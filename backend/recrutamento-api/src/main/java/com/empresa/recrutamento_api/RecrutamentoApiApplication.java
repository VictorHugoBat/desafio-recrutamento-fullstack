package com.empresa.recrutamento_api;

import com.empresa.recrutamento_api.models.Usuario;
import com.empresa.recrutamento_api.repository.UsuarioRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class RecrutamentoApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(RecrutamentoApiApplication.class, args);
    }

    // Este bloco roda toda vez que o Spring inicia
    @Bean
    CommandLineRunner init(UsuarioRepository repo) {
        return args -> {
            // Se não houver usuários, cria o Admin e o Candidato padrão
            if (repo.count() == 0) {
                Usuario admin = new Usuario();
                admin.setNome("Administrador");
                admin.setEmail("admin@teste.com");
                admin.setPerfil("ADMIN");
                admin.setSenha("123");
                repo.save(admin);

                Usuario candidato = new Usuario();
                candidato.setNome("João Silva");
                candidato.setEmail("user@teste.com");
                candidato.setPerfil("CANDIDATO");
                candidato.setSenha("123");
                repo.save(candidato);
                
                System.out.println(">>> Usuários de teste criados com sucesso (IDs 1 e 2)");
            }
        };
    }
}