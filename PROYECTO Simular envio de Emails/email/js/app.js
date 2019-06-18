//Variables 
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const form = document.querySelector('#enviar-mail');
const btnReset = document.getElementById('resetBtn');

// Event Listener
eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', iniciarApp);
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);
    btnEnviar.addEventListener('click', enviarEmail);
    btnReset.addEventListener('click', resetForm);
}

//Funciones
function iniciarApp(){
    btnEnviar.disabled = true
}

function validarCampo(){
    validarLongitud(this); //Validar "this" hace referencia al campo.
    if(this.type === 'email'){
        validarEmail(this);
    }
    let errores = document.querySelectorAll('.error');
    console.log(email.value.length);
    console.log(asunto.value.length);
    console.log(mensaje.value.length);
    if(email.value.length !== 0 && asunto.value.length !== 0 && mensaje.value.length!== 0){
        if(errores.length === 0){
            btnEnviar.disabled=false;
        } 
    } else{
        btnEnviar.disabled=true;
    }
}

function enviarEmail(e){
e.preventDefault();
const spinner = document.getElementById('spinner');
spinner.style.display='block'
const enviado = document.getElementById('successful');
setTimeout(function(){
    spinner.style.display='none';
    enviado.style.display='block';
    setTimeout(function(){
        enviado.remove();
        form.reset();
        iniciarApp();
    },3000)
},2000);
}

function validarLongitud(campo){
if(campo.value.length>0){
    campo.style.borderBottomColor= 'green'
    campo.classList.remove('error');
}else{
    campo.style.borderBottomColor= 'red'
    campo.classList.add('error');
}
}

function validarEmail(campo){
const correo= campo.value;
if(correo.indexOf('@') !== -1){
    campo.style.borderBottomColor= 'green'
    campo.classList.remove('error');
} else{
    campo.style.borderBottomColor= 'red'
    campo.classList.add('error');
}
}

function resetForm(e){
    e.preventDefault();
    form.reset();
    iniciarApp();
}