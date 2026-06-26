document.addEventListener('DOMContentLoaded', function(){
    //Aplicar a máscara de CPF

    var cpfInput = document.getElementById('cpfInput');

    cpfInput.addEventListener('input', function(){

        //removendo os caracteres não numéricos
        var cpf = cpfInput.value.replace(/\D/g,'');

        //limitar até 11 números
        if(cpf.length > 11){

            cpf = cpf.slice(0,11);
        }
        
        if(cpf.length > 3){

            cpf = cpf.replace(/(\d{3})(\d{3})/,'$1.$2.');
        }

        if(cpf.length > 7){
             cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})/,'$1.$2.$3.');
        }

         if(cpf.length > 11){
             cpf = cpf.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d{1,2})/,'$1.$2.$3-$4');
        }

        cpfInput.value = cpf;

    });

    var validarButton = document.getElementById("validarButton");
    validarButton.addEventListener('click', function(){

        var cpf = cpfInput.value;
        document.getElementById("resultado").textContent = "Em construção";

    });
});