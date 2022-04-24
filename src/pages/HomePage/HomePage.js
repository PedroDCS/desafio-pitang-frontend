import styles from './HomePage.module.scss'

function HomePage() {
    return (<div className={styles.home_container}>
        <p className={styles.hometitle}>Agendamento de Vacinas COVID-19</p>
    </div>
    );
}

export default HomePage;