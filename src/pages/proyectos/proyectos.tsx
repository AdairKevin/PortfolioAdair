import styles from "./proyectos.module.css";
import proyectos from "../../data/proyectos.json";
import { ProjectCard } from "./cardProyectos";

function Proyectos() {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Proyectos Principales</h2>
      <div className={styles.projects}>
        {proyectos.map((proyectos, id) => {
          return <ProjectCard key={id} project={proyectos} />;
        })}
      </div>
    </section>
  );
}

export default Proyectos;
