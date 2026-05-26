class Contato {
    constructor(nome, email, telefone, tipoContato, mensagem) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.tipoContato = tipoContato;
        this.mensagem = mensagem;
    }
}

function Post(form) {
   
    const nome = form.elements.namedItem("nome").value;
    const email = form.elements.namedItem("email").value;
    const telefone = form.elements.namedItem("telefone").value;
    const tipoContato = form.elements.namedItem("contato").value; 
    const mensagem = form.elements.namedItem("mensagem").value;

   
    let data = new Contato(nome, email, telefone, tipoContato, mensagem);
    

    console.log("=== Dados do formulário ===");
    console.table(data); 
    
    
    Enviar(nome);
    
   
    form.reset();
}


function Enviar(nomeUsuario) {
    if (nomeUsuario !== "") {
        alert('Obrigado sr(a) ' + nomeUsuario + ', os seus dados foram encaminhados com sucesso!');
    }
}