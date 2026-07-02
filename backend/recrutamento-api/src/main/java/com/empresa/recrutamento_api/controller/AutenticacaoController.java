package com.empresa.recrutamento_api.controller;

import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/login")
@CrossOrigin(origins = "http://localhost:4200")
public class AutenticacaoController {
	
	
	
	@PostMapping
    public Map<String, String> login(@RequestBody Map<String, String> dados) {
        String email = dados.get("email");
        String senha = dados.get("senha");

        if ("admin@teste.com".equals(email) && "123".equals(senha)) {
            return Map.of("perfil", "ADMIN", "nome", "Administrador", "id", "1");
        } else if ("user@teste.com".equals(email) && "123".equals(senha)) {
            return Map.of("perfil", "CANDIDATO", "nome", "Victor Candidato", "id", "2");
        }
        
        throw new RuntimeException("Usuário ou senha inválidos");
    }


}
