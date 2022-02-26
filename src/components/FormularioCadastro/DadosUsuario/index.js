import { TextField, Button } from "@mui/material";
import { useState, useContext } from 'react';
import ValidacoesCadastro from "../../../contexts/ValidacoesCadastro";
import useErros from "../../../hooks/useErros";

const DadosUsuario = ({ enviar }) => {

    const validacoes = useContext(ValidacoesCadastro);

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return(
        <form onSubmit={event => {
            event.preventDefault();
            if (possoEnviar()) {
                enviar({ email, senha });
            }
        }}>
            <TextField 
                value={ email }
                id="email" 
                label="E-mail"
                type="email" 
                name="email"
                margin="normal" 
                fullWidth
                required
                onChange={ event => {
                    setEmail(event.target.value)
                } }
            />
            
            <TextField
                value={ senha } 
                id="senha" 
                label="Senha" 
                error={ !erros.senha.valido }
                helperText={ erros.senha.texto }
                type="password" 
                name="senha"
                margin="normal" 
                fullWidth
                required
                onChange={ event => {
                    setSenha(event.target.value);
                } }
                onBlur={ validarCampos }
            />

            <Button 
                type="submit" 
                variant="contained" 
                color="primary"
            >
                Próximo
            </Button>
        </form>
    );
}

export default DadosUsuario;