const email=document.getElementById("email");

const senha=document.getElementById("senha");

const entrar=document.getElementById("entrar");

const mensagem=document.getElementById("mensagem");


const usuario={

email:"jairisonsousa93@gmail.com",

senha:"1010"

};


entrar.addEventListener("click",()=>{

if(

email.value===usuario.email &&

senha.value===usuario.senha

){

localStorage.setItem(

"logado",

"true"

);

window.location.href="index.html";

}

else{

mensagem.innerHTML=

"E-mail ou senha inválidos";

}

});