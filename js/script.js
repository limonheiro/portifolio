import { mensagens, tiposErro } from "./mensagens.js";

const formulario = document.querySelector('.formulario_container')

const signupCaptcha = document.getElementById('signupCaptcha');
signupCaptcha.style.visibility = 'hidden'

let camposFormulario = document.querySelectorAll('[required]')


formulario.addEventListener('focusout', () => {

    const valores = formulario.querySelectorAll('input, textarea')

    var arrayValores = Array.prototype.slice.call(valores);

    if(arrayValores.every(a => a.validity.valid)){
        signupCaptcha.style.visibility = 'visible'
    }else{
        signupCaptcha.style.visibility = 'hidden'
    }

})

signupCaptcha.addEventListener('verified', (e) => {
    enviarFormulario()
});
signupCaptcha.addEventListener('error', (e) => {
    console.log('error event', { error: e.error });
});

camposFormulario.forEach((campo) => {
    campo.addEventListener('blur', () => verificarCampo(campo))
    campo.addEventListener('invalid', event => {
        event.preventDefault()
    })

})

function verificarCampo(campo) {
    let mensagem = ''
    campo.setCustomValidity('')

    tiposErro.forEach(erro => {
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
            console.log(mensagem);
        }
    })

    const mensagemErro = campo.parentNode.querySelector('.mensagem_erro');
    const validadorDeInput = campo.checkValidity();

    if (!validadorDeInput) {
        mensagemErro.textContent = mensagem;

    } else {
        mensagemErro.textContent = "";
    }
}

async function enviarFormulario() {

    const nome = document.querySelector('#nome')
    const email = document.querySelector('#email')
    const assunto = document.querySelector('#assunto')
    const mensagem = document.querySelector('#mensagem')

    const corpo = {
        "nome": nome,
        "email": email,
        "assunto": assunto,
        "mensagem": mensagem
    }

    await enviandoFormulario(corpo)
    window.location.href = '../index.html'

}

async function enviandoFormulario(corpo) {
    await fetch('http://localhost:3000/formularios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*'
        },
        body: JSON.stringify(corpo)
    })
}



