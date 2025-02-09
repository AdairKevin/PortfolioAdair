import styles from "./about.module.css";
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
        <div className={styles.about}>
          <p>
            <h1>Sobre mí</h1>
            <br />
            Hola, soy Adair Kevin, TSU en Sistemas Informaticos con pasión por
            el desarrollo Front-End, UX/UI. Tengo experiencia en Desarrollo
            FrontEnd.
          </p>
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
    </div>
  );
}

export default About;
