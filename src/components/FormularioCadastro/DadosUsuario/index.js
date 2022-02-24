import { TextField, Button } from "@mui/material";

const DadosUsuario = () => {
    return(
        <form>
            <TextField 
                id="email" 
                label="E-mail"
                type="email" 
                margin="normal" 
                fullWidth
            />
            
            <TextField 
                id="senha" 
                label="Senha" 
                type="password" 
                margin="normal" 
                fullWidth
            />

            <Button 
                type="submit" 
                variant="contained" 
                color="primary"
            >
                Cadastrar
            </Button>
        </form>
    );
}

export default DadosUsuario;