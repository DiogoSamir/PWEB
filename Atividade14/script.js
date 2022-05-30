function validate(p) {
    p.preventDefault();
    
    const form = document.forms.validate;
    const nome = form.nome.value;
    const email = form.email.value;
    const comentario = form.comentario.value;
    const radioNao = form.nao.checked;
    
    if (nome.length < 10) {
        alert('Nome não pode ter menos de 10 caracteres');
        return false;
    }

    if (email.indexOf("@") == -1 && email.indexOf(".") == -1) {
        alert('Email não possui @ ou .');
        return false;
    }

    if (comentario.length < 20) {
        alert('Comentario deve ter no mínimo 20 caracteres');
        return false;
    }

    if (radioNao) {
        alert("Que bom que você voltou a visitar esta página!")
    }else{
        alert("Volte sempre à está página")
    }

    form.submit();
}