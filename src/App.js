import { Container, Typography } from '@mui/material';
import '@fontsource/roboto/400.css';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant='h3' component='h1' >Formulario de Cadastro</Typography>
      <FormularioCadastro onSubmit={ enviarForm } validarCPF={ validarCPF }/>
    </Container>
  );
}

const enviarForm = (dados) => {
  console.log(dados);
}

const validarCPF = (cpf) => {
  if (cpf.length !== 11) {
    return {valido: false, texto: "CPF deve possuir 11 dígitos."}
  }
  return {valido: true, texto: ""}
}

export default App;
