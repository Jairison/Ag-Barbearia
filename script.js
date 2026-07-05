const cliente=document.getElementById("cliente");

const barbeiro=document.getElementById("barbeiro");

const data=document.getElementById("data");

const hora=document.getElementById("hora");

const lista=document.getElementById("lista");

const agendar=document.getElementById("agendar");

const limpar=document.getElementById("limpar");


let agendamentos=

JSON.parse(

localStorage.getItem("agendamentos")

)

||[];


function salvar(){

localStorage.setItem(

"agendamentos",

JSON.stringify(agendamentos)

);

}


function renderizar(){

lista.innerHTML="";


agendamentos.forEach((item,index)=>{

lista.innerHTML+=`

<div class="item">

<div class="infos">

<strong>${item.cliente}</strong>

<span>✂ ${item.barbeiro}</span>

<span>📅 ${item.data}</span>

<span>🕒 ${item.hora}</span>

</div>

<button

class="excluir"

onclick="excluir(${index})"

>

Excluir

</button>

</div>

`;

});

}


agendar.addEventListener("click",()=>{

if(

cliente.value==="" ||

data.value===""

){

return alert(

"Preencha os campos"

);

}


const existe=

agendamentos.find(item=>

item.barbeiro===barbeiro.value &&

item.data===data.value &&

item.hora===hora.value

);


if(existe){

return alert(

"Esse horário já está agendado"

);

}


agendamentos.push({

cliente:cliente.value,

barbeiro:barbeiro.value,

data:data.value,

hora:hora.value

});


salvar();

renderizar();

cliente.value="";

});


function excluir(index){

agendamentos.splice(index,1);

salvar();

renderizar();

}


limpar.addEventListener("click",()=>{

if(

confirm(

"Deseja apagar tudo?"

)

){

localStorage.removeItem(

"agendamentos"

);

agendamentos=[];

renderizar();

}

});

renderizar();

const btnBarbearia =

document.getElementById("minhaBarbearia");

const painel =

document.getElementById("painelBarbearia");

const fecharPainel =

document.getElementById("fecharPainel");

btnBarbearia.addEventListener("click",()=>{

painel.classList.add("ativo");

});

fecharPainel.addEventListener("click",()=>{

painel.classList.remove("ativo");

});

const voltarLogin = document.getElementById("voltarLogin");

voltarLogin.addEventListener("click", () => {

const confirmar = confirm(
"Deseja voltar para a tela de login?"
);

if(confirmar){

window.location.href = "login.html";

}

});

function abrirSecao(secao){

const todasSecoes =
document.querySelectorAll('.secao');

todasSecoes.forEach(item =>{

item.classList.remove('ativa');

});

document
.getElementById(secao)
.classList.add('ativa');

}

//abre a primeira tela automaticamente

document.addEventListener(
'DOMContentLoaded',
()=>{

abrirSecao('barbeiros');

});

const botao = document.getElementById("btnAdicionarBarbeiro");
const listaBarbeiros = document.getElementById("listaBarbeiros");

botao.addEventListener("click", function () {

    let nomeBarbeiro = prompt("Digite o nome do barbeiro:");

    if (nomeBarbeiro === null) {
        return;
    }

    nomeBarbeiro = nomeBarbeiro.trim();

    if (nomeBarbeiro === "") {
        alert("Digite um nome válido.");
        return;
    }

    const novoBarbeiro = document.createElement("li");

    novoBarbeiro.textContent = nomeBarbeiro;

    listaBarbeiros.appendChild(novoBarbeiro);

});