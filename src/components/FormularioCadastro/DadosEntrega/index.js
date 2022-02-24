import { Button, TextField } from "@mui/material";

const DadosEntrega = () => {
    return(
        <form>
            <TextField 
                id="cep" 
                label="CEP"
                type="text" 
                margin="normal" 
                fullWidth
            />

<TextField 
                id="endereco" 
                label="Endereço"
                type="text" 
                margin="normal" 
                fullWidth
            />

            <TextField 
                id="numero" 
                label="Numero"
                type="number" 
                margin="normal" 
            />

            <TextField 
                id="estado" 
                label="Estado"
                type="text" 
                margin="normal" 
            />

            <TextField 
                id="cidade" 
                label="Cidade"
                type="text" 
                margin="normal" 
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