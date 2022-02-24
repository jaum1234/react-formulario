import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

const FormularioCadastro = ({ onSubmit, validarCPF }) => {
    return(
        <>
            <DadosPessoais onSubmit={ onSubmit } validarCPF={ validarCPF }/>
            <DadosUsuario/>
            <DadosEntrega/>
        </>
    );
}

export default FormularioCadastro;