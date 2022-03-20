
function valida_formulario(form){

    //Validações sobre obrigatoriedade de preenchimento de campos

        //Para o campo nome
        var caixa_nome;
        caixa_nome = document.querySelector(".msg-nome");
        caixa_nome.style.display = "none";

        if(form.nome.value.length<5){

            caixa_nome.innerHTML = "Campo de preenchimento obrigatório. Insira seu nome completo";
            caixa_nome.style.display = "block";

            form.nome.focus();
            return false;
        }

        //Para o campo e-mail
        var caixa_email;
        caixa_email = document.querySelector(".msg-email");
        caixa_email.style.display = "none";

        if (form.email.value==""){

            caixa_email.innerHTML = "Campo de preenchimento obrigatório. Insira seu endereço de e-mail";
            caixa_email.style.display = "block";
        
            form.email.focus();
            return false;
        }
    
    //Validação de formato de dado no campo de email

    var invalid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/; //expressão regular
    
    if (invalid.test(form.email.value)==false){

        caixa_email.innerHTML = "Endereço de e-mail inválido";
        caixa_email.style.display = "block";
    
        form.email.focus();
        return false;
    } 

}