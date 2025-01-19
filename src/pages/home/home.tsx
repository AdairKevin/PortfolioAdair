import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.contenedor}>
      <div className={styles.contenedor__left}>
        <div className={styles.left}>
          <h1>Adair Maldonado</h1>
          <h2>
            <span>FrontEnd</span> Developer<span>.</span>
          </h2>
          <button type="button" className={styles.boton}>
            Leer más →
          </button>
          <button className={styles.acciones}>Copiar Email</button>
          <button className={styles.acciones}>Descargar CV</button>
        </div>

        <div className={styles.links}>
          <button className={styles.redes}>
            <a href="">
              <i className={"bi bi-github"}></i>
            </a>
          </button>
          <button className={styles.redes}>
            <a href="">
              <i className={"bi bi-linkedin"}></i>
            </a>
          </button>
        </div>
      </div>
      <div className={styles.contenedor__right}>
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default Home;
