package com.empresa.recrutamento_api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.empresa.recrutamento_api.models.Candidatura;

public interface CandidaturaRepository extends JpaRepository<Candidatura, Long> {

}
