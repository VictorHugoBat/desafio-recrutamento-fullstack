package com.empresa.recrutamento_api;

import static org.junit.jupiter.api.Assertions.assertEquals;
import com.empresa.recrutamento_api.models.Vaga;
import org.junit.jupiter.api.Test;

public class VagaTest {

    @Test
    public void testDadosDaVaga() {
        Vaga vaga = new Vaga();
        vaga.setTitulo("Desenvolvedor Java");
        vaga.setDescricao("Vaga para Pleno");
        vaga.setStatus("ABERTA");

        assertEquals("Desenvolvedor Java", vaga.getTitulo());
        assertEquals("Vaga para Pleno", vaga.getDescricao());
        assertEquals("ABERTA", vaga.getStatus());
    }
}