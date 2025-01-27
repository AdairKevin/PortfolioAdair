import styles from "./home.module.css";

function Home() {
  return (
    <div>
      <div className={styles.contenedor__centro}>
        <div className={styles.centro}>
          <div className={styles.nombre}>
            <h1>Hola, Soy Adair Maldonado</h1>
            <div className={styles.disponible}>
              <p>Disponible para trabajar</p>
            </div>
          </div>

          <h2>
            <span>FrontEnd</span> Developer<span>.</span>
          </h2>

          <p className={styles.descripcion}>
            TSU en sistemas informaticos, Animador Digital y entusista UX/UI
            <span> +1 año de experiencia </span>
            en desarrollo <span> FrontEnd </span> y{" "}
            <span> Diseño Grafico </span>, del Estado de México. Me motiva
            enfrentar desafíos que pongan a prueba mis habilidades mientras
            contribuyo al crecimiento de los proyectos.
          </p>

          <div className={styles.botones}>
            <button type="button" className={`${styles.acciones} ${styles.primeraAccion}`}>
              Leer más
              <i id="flecha" className={"bi bi-arrow-right"}></i>
            </button>
            <button className={styles.acciones}>
              <i className={"bi bi-copy"}></i>
              Copiar Email
            </button>
            <button className={styles.acciones}>
              <i className={"bi bi-download"}></i>
              Descargar CV
            </button>
            <button className={styles.acciones}>
              <i className={"bi bi-github"}></i>
              Github
            </button>
            <button className={styles.acciones}>
              <i className={"bi bi-linkedin"}></i>
              Linkedin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
