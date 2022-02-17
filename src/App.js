import { Container } from '@mui/material';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <h1>Formulario de Cadastro</h1>
      <FormularioCadastro/>
    </Container>
  );
}

export default App;
