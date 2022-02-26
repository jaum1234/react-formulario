import { createContext } from "react";

const semValidacao = (dados) => {
    console.log(dados);
    return { valido: true, texto: "" }
}

/**
 * O parametro recebido pelo createContext no contrutor defini os valores padroes do contexto caso 
 * um provider nao seja criado.
 */
const ValidacoesCadastro = createContext(
    {cpf: semValidacao, senha: semValidacao, nome: semValidacao}
);


export default ValidacoesCadastro;

