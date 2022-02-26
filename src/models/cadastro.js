const validarCPF = (cpf) => {
    if (cpf.length !== 11) {
      return {valido: false, texto: "CPF deve possuir 11 dígitos."}
    }
    return {valido: true, texto: ""}
}

const validarSenha = (senha) => {
    if (senha.length < 4 || senha.length > 72) {
      return {valido: false, texto: "Senha deve ter 4 a 72 dígitos."}
    }
    return {valido: true, texto: ""}
}

const validarNome = (nome) => {
  if (nome.length < 3 || nome.length > 100) {
    return {valido: false, texto: "Nome deve ter entre 3 e 100 caracteres."}
  }
  return {valido: true, texto: ""}
}

export { validarCPF, validarSenha, validarNome };
