import styles from "./navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <input type="checkbox" id="check" className={styles.check} />
      <label htmlFor="check" className={styles.checkbtn}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          fill="currentColor"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </label>

      <ul className={styles.ul}>
        <li className={styles.li}>
          <a href="" className={styles.a}>
            Inicio
          </a>
        </li>
        <li className={styles.li}>
          <a href="" className={styles.a}>
            Proyectos
          </a>
        </li>
        <li className={styles.li}>
          <a href="" className={styles.a}>
            Diseño
          </a>
        </li>
        <li className={styles.li}>
          <a href="" className={styles.a}>
            Por Diversion
          </a>
        </li>
        <li className={styles.li}>
          <a href="" className={styles.a}>
            Sobre mi
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
