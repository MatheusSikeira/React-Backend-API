import styles from './home.module.css';

const Home = () =>{
    return(
        <section className={styles.home_container}>
            <h1>Bem vindo a loja de games Scorpion
            </h1>
            <p>"Get over here! buy our games!"</p>
            <img className={styles.home_container}src="" alt="" />
        </section>
    );
}

export default Home;