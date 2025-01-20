import styles from "./about.module.css";
import yoImage from "../../assets/images/yo.png";
import {
  FaHtml5,
  FaCss3Alt,
  FaAngular,
  FaFigma,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiAdobephotoshop, SiCanva, SiAdobepremierepro } from "react-icons/si";

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.container__left}>
        <div className={styles.titulo}>
          <p>Nice to see you!</p>

          <div className={styles.texto}>
            <p>
              Soy <b>Adair Maldonado</b> TSU en sistemas informaticos y un
              desarrollador front-end autodidacta, apasionado por el aprendizaje
              continuo, la innovación y la creatividad. Me motiva enfrentar
              desafíos que pongan a prueba mis habilidades mientras contribuyo
              al impacto social y al crecimiento de los proyectos. Me considero
              adaptable, resolutivo y siempre dispuesto a aprender nuevas
              tecnologías. Busco formar parte de empresas de tecnología donde
              pueda seguir creciendo profesionalmente y aportar soluciones
              creativas.
            </p>
          </div>
        </div>

        <div className={styles.skills}>
          <div className={styles.skill}>
            <FaHtml5 size="2em" className={styles.i} />
          </div>

          <div className={styles.skill}>
            <FaCss3Alt size="2em" className={styles.i} />
          </div>

          <div className={styles.skill}>
            <IoLogoJavascript size="2em" className={styles.i} />
          </div>

          <div className={styles.skill}>
            <FaAngular size="2em" className={styles.i} />
          </div>

          <div className={styles.skill}>
            <FaReact size="2em" className={styles.i} />
          </div>

          <div className={styles.skill}>
            <FaFigma size="2em" className={styles.i} />
          </div>

          <div className={styles.skill}>
            <SiAdobephotoshop size="2em" className={styles.i} />
          </div>

          <div className={styles.skill}>
            <SiAdobepremierepro size="2em" className={styles.i} />
          </div>

          <div className={styles.skill}>
            <SiCanva size="2em" className={styles.i} />
          </div>
        </div>
      </div>

      <div className={styles.container__right}>
        <div className={styles.imagen}>
          <img src={yoImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
