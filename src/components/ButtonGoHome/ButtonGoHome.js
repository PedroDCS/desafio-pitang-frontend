import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

function ButtonGoHome() {
    const navigate = useNavigate()

    const navigateToHome = () => {
        navigate('/')
    }
    return (<Button className='button' onClick={navigateToHome} >Voltar Pra Home</Button>
    );
}

export default ButtonGoHome;