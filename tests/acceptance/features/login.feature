Feature: Login de usuario
    Scenario: hacer login con credenciales validas en el siti saucedemo
        Given El usuario navega a la pagina de login
        And Ingresa el nombre de usuario 'standard_user'
        And Ingresa el password de usuario 'secret_sauce'
        When Hace click en el boton login
        Then Se me permite navegar a la pagina de productos
