import { Button } from '@mui/material';
import { TextField } from '@mui/material'; 


const FormularioCadastro = () => {
    return(
        <form>
            <TextField id="nome" label="Nome" variant="outlined" fullWidth margin="normal"/>
            <TextField id="sobrenome" label="Sobrenome" variant="outlined" fullWidth margin="normal"/>
            <TextField id="cpf" label="CPF" variant="outlined" fullWidth margin="normal"/>

        
            <Button variant="contained" color="primary" >Cadastrar</Button>

        </form>
    )
}

export default FormularioCadastro;