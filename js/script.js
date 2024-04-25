const formulario = document.querySelector('.formulario_container')

formulario.addEventListener('submit', async (event) => {
    event.preventDefault()

    const nome = document.querySelector('#nome').value
    const email = document.querySelector('#email').value
    const assunto = document.querySelector('#assunto').value
    const mensagem = document.querySelector('#mensagem').value

    const corpo = {
        "nome":nome,
        "email":email,
        "assunto":assunto,
        "mensagem":mensagem
    }

    await fetch('http://localhost:3000/formularios',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(corpo)
    })

    window.location.href = '../index.html'
})