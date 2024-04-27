
const tiposErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um email válido."
    },
    assunto: {
        valueMissing: "O campo de assunto não pode estar vazio.",
        tooShort: "Por favor, preencha um assunto válido."
    },
    mensagem: {
        valueMissing: "O campo de mensagem não pode estar vazio.",
        tooShort: "Por favor, preencha com uma mensagem válido."
    }
}

export { mensagens, tiposErro }