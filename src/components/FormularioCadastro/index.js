import { Button, TextField, Switch, FormControlLabel } from '@mui/material';
import { useState } from 'react';

const FormularioCadastro = ({ onSubmit, validarCPF }) => {

    const [nome, setNome] = useState("");
    // const arr = useState();
    // const nome = arr[0];
    // const setNome = arr[1];

    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({
        cpf: {
            valido: true, 
            texto: ""
        }
    });

    return(
        <form onSubmit={ event => {
            event.preventDefault();
            onSubmit({ nome, sobrenome, cpf, novidades, promocoes });
        } }>
            <TextField 
                value={ nome }
                id="nome" 
                label="Nome" 
                variant="outlined" 
                error={false}
                helperText="CPF deve possuir 11 dígitos"
                fullWidth 
                margin="normal"
                onChange={ event => setNome(event.target.value) }
            />
            
            <TextField 
                value={ sobrenome }
                id="sobrenome" 
                label="Sobrenome" 
                variant="outlined" 
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
                margin="normal"
                onChange={ event => {
                    let tempCpf = event.target.value;

                    if (tempCpf.length >= 11) {
                        tempCpf = tempCpf.substring(0, 11);
                    }
                    setCpf(tempCpf);
                }}
                onBlur={ event => {
                    let validacao = validarCPF(event.target.value);

                    setErros({
                        cpf: validacao
                    })
                }}
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
            
            <Button type='submit' variant="contained" color="primary" >Cadastrar</Button>
                
        </form>
        
    )
}


export default FormularioCadastro;