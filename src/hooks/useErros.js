import { useState } from "react";

const useErros = (validacoes) => {

    const estadoInicial = criarEstadoInicial(validacoes);

    const [erros, setErros] = useState(estadoInicial);

    const validarCampos = event => {
        const {name, value} = event.currentTarget;
        const validacao = validacoes[name](value);

        setErros({...erros, [name]: validacao});
    }

    const possoEnviar = () => {
        for (let campo in erros) {
            if (!erros[campo].valido) {
                return false;
            }
        }
        return true;
    }

    return [erros, validarCampos, possoEnviar];
}

const criarEstadoInicial = (validacoes) => {
    const estadoInicial = {};

    for (let campo in validacoes) {
        estadoInicial[campo] = { valido: true, texto: "" }
    }
    return estadoInicial;
}

export default useErros;