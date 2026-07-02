package com.empresa.recrutamento_api.controller;

import com.empresa.recrutamento_api.models.Vaga;
import com.empresa.recrutamento_api.repository.VagaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/vagas")
public class VagaControlller {
	
	 @Autowired
	    private VagaRepository vagaRepository;

	    @GetMapping
	    public List<Vaga> listarTodas() {
	        return vagaRepository.findAll();
	    }

	    @PostMapping
	    public Vaga criar(@RequestBody Vaga vaga) {
	        return vagaRepository.save(vaga);
	    }

	    @DeleteMapping("/{id}")
	    public void excluir(@PathVariable Long id) {
	    	vagaRepository.deleteById(id);
	    }
	    
	    @PutMapping("/{id}")
	    public Vaga atualizar(@PathVariable Long id, @RequestBody Vaga vagaDadosNovos) {
	        return vagaRepository.findById(id).map(vagaExistente -> {
	            vagaExistente.setTitulo(vagaDadosNovos.getTitulo());
	            vagaExistente.setDescricao(vagaDadosNovos.getDescricao());
	            vagaExistente.setRequisitos(vagaDadosNovos.getRequisitos());
	            vagaExistente.setStatus(vagaDadosNovos.getStatus());

	            
	            return vagaRepository.save(vagaExistente);
	        }).orElseThrow(() -> new RuntimeException("Vaga não encontrada com o id: " + id));
	}
	
}


