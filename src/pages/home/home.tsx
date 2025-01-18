import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.contenedor}>
      <div className={styles.he}>
        <h1>Adair Maldonado</h1>
        <h2>
          <span>FrontEnd</span> Developer<span>.</span>
        </h2>
        <button className="btn">Leer más →</button>
        <ul>
          <li>hola</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
