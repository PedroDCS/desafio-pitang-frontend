import ButtonHome from '../../components/Button/ButtonHome';
import styles from './HomePage.module.scss'
import { useNavigate } from 'react-router-dom'

function HomePage() {
    const navigate = useNavigate()

    const navigateToConsultas = () => {
        navigate('/consultas',{state:{dayProp: new Date()}})
    }
    const navigateTomarcarConsultas = () => {
        navigate('/marcarconsulta')
    }
    const navigateToRegister = () => {
        navigate('/registro')
    }
    return (<div className={styles.home_container}>
        <h1>Agendamento de Vacinas COVID-19</h1>
        <ButtonHome onclick={navigateToConsultas} text="Consultar Agendamentos" />
        <ButtonHome onclick={navigateTomarcarConsultas} text="Agendar horarios" />
        <ButtonHome onclick={navigateToRegister} text="criar conta" />
    </div>
    );
}

export default HomePage;