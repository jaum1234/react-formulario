import { Container, Typography } from '@mui/material';
import '@fontsource/roboto/400.css';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro';
import { validarCPF, validarSenha, validarNome } from './models/cadastro';
import ValidacoesCadastro from './contexts/ValidacoesCadastro';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant='h3' component='h1' >Formulario de Cadastro</Typography>
      <ValidacoesCadastro.Provider value={ {cpf: validarCPF, senha: validarSenha, nome: validarNome} }>
        <FormularioCadastro enviar={ enviarForm }/>
      </ValidacoesCadastro.Provider>
    </Container>
  );
}

const enviarForm = (dados) => {
  console.log(dados);
}



export default App;
