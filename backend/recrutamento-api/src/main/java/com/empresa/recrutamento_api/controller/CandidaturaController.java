package com.empresa.recrutamento_api.controller;

import com.empresa.recrutamento_api.models.Candidatura;
import com.empresa.recrutamento_api.repository.CandidaturaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/candidaturas")

public class CandidaturaController {

	 @Autowired
	    private CandidaturaRepository repositorio;

	    @PostMapping
	    public Candidatura candidatar(@RequestBody Candidatura candidatura) {
	    	
	    	 System.out.println("--------------------------------------------------");
	    	    System.out.println("NOTIFICAÇÃO: Nova candidatura recebida!");
	    	    System.out.println("Vaga ID: " + candidatura.getVaga().getId());
	    	    System.out.println("Candidato ID: " + candidatura.getCandidato().getId());
	    	    System.out.println("--------------------------------------------------");

	        return repositorio.save(candidatura);
	    }

	    @GetMapping
	    public List<Candidatura> listarTodas() {
	        return repositorio.findAll();
	    }
	    
	    @PutMapping("/{id}")
	    public Candidatura atualizarStatus(@PathVariable Long id, @RequestBody Candidatura dados) {
	        Candidatura c = repositorio.findById(id).get();
	        c.setStatus(dados.getStatus());
	        c.setFeedback(dados.getFeedback());
	        return repositorio.save(c);
	    }
	    
	    
	    @GetMapping("/meu-painel/{usuarioId}")
	    public List<Candidatura> listarMinhasCandidaturas(@PathVariable Long usuarioId) {
	        
	        return repositorio.findAll().stream()
	                .filter(c -> c.getCandidato().getId().equals(usuarioId))
	                .collect(java.util.stream.Collectors.toList());
	    }
	    
	}
