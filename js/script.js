const formulario = document.querySelector('.formulario_container')
const signupCaptcha = document.getElementById('signupCaptcha');

signupCaptcha.addEventListener('verified', (e) => {
    console.log('verified event', { token: e.token })
    enviarFormulario()
});
signupCaptcha.addEventListener('error', (e) => {
    console.log('error event', { error: e.error });
});

async function enviarFormulario() {

    console.log('aa')
    const nome = document.querySelector('#nome').value
    const email = document.querySelector('#email').value
    const assunto = document.querySelector('#assunto').value
    const mensagem = document.querySelector('#mensagem').value

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



