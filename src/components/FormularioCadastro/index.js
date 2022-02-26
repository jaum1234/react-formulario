import { Step, StepLabel, Stepper, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

const FormularioCadastro = ({ enviar }) => {

    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDadosColetados] = useState({});

    useEffect(() => {
        if (etapaAtual === formularios.length - 1) {
            enviar(dadosColetados);
        }
    });

    const proximo = () => {
        setEtapaAtual(etapaAtual + 1);
    }

    const coletarDados = (dados) => {
        setDadosColetados({...dadosColetados, ...dados});
        proximo();
    }

    const formularios = [
        <DadosUsuario enviar={ coletarDados }/>,
        <DadosPessoais enviar={ coletarDados }/>,
        <DadosEntrega enviar={ coletarDados }/>,
        <Typography variant="h5">Obrigado pelo cadastro</Typography>
    ]

    return(
        <>
            <Stepper activeStep={ etapaAtual }>
                <Step><StepLabel>Login</StepLabel></Step>
                <Step><StepLabel>Pessoal</StepLabel></Step>
                <Step><StepLabel>Entrega</StepLabel></Step>
                <Step><StepLabel>Finalizaçao</StepLabel></Step>
            </Stepper>
            { formularios[etapaAtual] }
        </>
    );
}

export default FormularioCadastro;