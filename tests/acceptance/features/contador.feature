Feature: Contador Simple
    Scenario: El usuario incrementa el contador
        Given El usuario visita la web del contador
        When el usuario hace click en el boton +  
        Then el usuario ve el contador incrementarse
    Scenario: El usuario decrementa el contador
        Given El usuario visita la web del contador
        When el usuario hace click en el boton -
        Then el usuario ve el contador disminuir en uno