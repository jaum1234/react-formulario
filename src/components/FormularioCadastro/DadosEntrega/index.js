import { Button, TextField } from "@mui/material";
import { useState } from "react";

const DadosEntrega = ({ enviar }) => {

    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");

    return(
        <form onSubmit={ event => {
            event.preventDefault();
            enviar({ cep, endereco, numero, estado, cidade })
        } }>
            <TextField 
                value={ cep }
                id="cep" 
                label="CEP"
                type="text" 
                margin="normal" 
                fullWidth
                onChange={ event => {
                    setCep(event.target.value);
                } }
            />

            <TextField 
                value={ endereco }
                id="endereco" 
                label="Endereço"
                type="text" 
                margin="normal" 
                fullWidth
                onChange={ event => {
                    setEndereco(event.target.value);
                } }
            />

            <TextField 
                value={ numero }
                id="numero" 
                label="Numero"
                type="number" 
                margin="normal"
                onChange={ event => {
                    setNumero(event.target.value);
                } } 
            />

            <TextField 
                value={ estado }
                id="estado" 
                label="Estado"
                type="text" 
                margin="normal" 
                onChange={ event => {
                    setEstado(event.target.value);
                } }
            />

            <TextField 
                value={ cidade }
                id="cidade" 
                label="Cidade"
                type="text" 
                margin="normal" 
                onChange={ event => {
                    setCidade(event.target.value);
                } }
            />

            <Button 
                type="submit" 
                variant="contained" 
                color="primary"
                fullWidth
            >
                Finalizar cadastro
            </Button>
        </form>
    );
}

export default DadosEntrega;