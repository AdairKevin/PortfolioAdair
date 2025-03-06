import styles from "./proyectosGit.module.css";
import { useEffect, useState } from "react";

interface git {
  name: string;
  description: string;
  html_url: string;
  language: string;
}

function ProyetosGit() {
  const [projects, setProjects] = useState<git[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/AdairKevin/repos", {
      headers: {
        Authorization: `no tengo token`,
      },
    })
      .then((response) => response.json())
      .then((data: git[]) => {
        if (Array.isArray(data)) {
          setProjects(data);
        } else {
          console.error("La API no devolvió un array:", data);
          setProjects([]);
        }
      })
      .catch((error) => {
        console.error("Error al obtener proyectos:", error);
        setProjects([]);
      });
  }, []);

  return (
    <div>
      <section className={styles.container}>
        <p className={styles.description}>
          Aquí puedes encontrar una colección de mis proyectos personales en
          GitHub. Cada uno de estos proyectos refleja mi entusiasmo por el
          desarrollo Front-End y mi dedicación al diseño UX/UI. Espero que
          encuentres interesante mi trabajo y el esfuerzo que he puesto en cada
          detalle.
        </p>
        <div>
          <div className={styles.projectsGrid}>
            {projects.map((project: git) => (
              <a
                className={styles.projectLink}
                key={project.name}
                href={project.html_url}
                target="_blank"
              >
                <div className={styles.projectCard}>
                  <div className={styles.projectName}>
                    <p>{project.name}</p>
                    <p className={styles.projectDescription}>
                      {project.description}
                    </p>
                  </div>
                  <i className="bi bi-box-arrow-up-right"></i>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProyetosGit;
