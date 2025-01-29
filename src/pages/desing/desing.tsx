import styles from "./desing.module.css";
import diseños from "../../data/disenos.json";
import { DiseñosCard } from "./desingCard";

function Desing() {
  return (
    <div>
      <h1 className={styles.titulo}>Trabajos de diseño</h1>
      <div className={styles.wrapper}>
        {diseños.map((diseños, id) => {
          return <DiseñosCard key={id} diseños={diseños} />;
        })}
      </div>
    </div>
  );
}

export default Desing;
