import styles from "./desingCard.module.css";
import { getImageUrl } from "../../utils.ts";

interface Diseños {
  id: string;
  title: string;
  imageSrc: string;
  description: string;
}

interface DiseñosCardProps {
  diseños: Diseños;
}

export const DiseñosCard: React.FC<DiseñosCardProps> = ({
  diseños: { id, title, imageSrc, description },
}) => {
  return (
    <div className={styles.container}>
      <input type="radio" name="slide" id={id} checked />
      <label
        htmlFor={id}
        className={styles.card}
        style={{ backgroundImage: `url(${getImageUrl(imageSrc)})` }}
      >
        <div className={styles.row}>
          <div className={styles.icon}>{id}</div>
          <div className={styles.description}>
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        </div>
      </label>
    </div>
  );
};
