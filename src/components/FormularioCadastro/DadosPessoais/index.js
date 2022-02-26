import { Button, TextField, Switch, FormControlLabel } from '@mui/material';
import { useState, useContext } from 'react';
import ValidacoesCadastro from '../../../contexts/ValidacoesCadastro';
import useErros from '../../../hooks/useErros';

const DadosPessoais = ({ enviar }) => {

    const validacoes = useContext(ValidacoesCadastro);

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    

    return(
        <form onSubmit={ event => {
            event.preventDefault();
            if (possoEnviar()) {
                enviar({ nome, sobrenome, cpf, novidades, promocoes });
            }
        } }>
            <TextField 
                value={ nome }
                id="nome" 
                label="Nome" 
                variant="outlined" 
                fullWidth 
                error={ !erros.nome.valido }
                helperText={ erros.nome.texto }
                name="nome"
                margin="normal"
                onChange={ event => setNome(event.target.value) }
                onBlur={ validarCampos }
            />
            
            <TextField 
                value={ sobrenome }
                id="sobrenome" 
                label="Sobrenome" 
                variant="outlined" 
                name="sobrenome"
                fullWidth 
                margin="normal"
                onChange={ event => setSobrenome(event.target.value) }
            />
            <TextField 
                value={ cpf }
                id="cpf" 
                label="CPF" 
                variant="outlined" 
                error={ !erros.cpf.valido }
                helperText={ erros.cpf.texto }
                fullWidth 
                name="cpf"
                margin="normal"
                onChange={ event => {
                    let tempCpf = event.target.value;

                    if (tempCpf.length >= 11) {
                        tempCpf = tempCpf.substring(0, 11);
                    }
                    setCpf(tempCpf);
                }}
                onBlur={ validarCampos }
            />

            <FormControlLabel 
                label="Promoçoes"
                control={ 
                    <Switch 
                        checked={ promocoes }
                        onChange={ event => setPromocoes(event.target.checked) } 
                        name="promocoes" 
                    /> 
                } 
            />
            <FormControlLabel 
                label="Receber novidades"
                control={ 
                    <Switch 
                        checked={ novidades }
                        onChange={ event => setNovidades(event.target.checked) } 
                        name="novidades" 
                    /> 
                } 
            />
            
            <Button type='submit' variant="contained" color="primary">Próximo</Button>
                
        </form>
        
    )
}


export default DadosPessoais;