import styles from "./HomeExhibitsSection.module.css";
import pagesCss from "../../Pages.module.css";
import { FC } from "react";
import { Link } from "react-router-dom";
import collage from "../../../assets/collages/Collage-exhibits.png";
import { useTranslation } from "react-i18next";

const HomeExhibitsSection: FC = () => {
  const { t } = useTranslation("mainPage")

  return (
    <section className={styles.exhibitSection}>
      <div className={styles.wrapper}>
        <div className={styles.exhibitsLeft}>
          <img src={collage} alt="Коллаж" />
        </div>
        <div className={styles.exhibitsRight}>
          <h2 className={`${pagesCss.sectionTitle} ${styles.title}`}>
            {t("exhibits.title")}
          </h2>
          <p className={`${pagesCss.description} ${styles.text}`}>
            {t("exhibits.description")}
          </p>
          <Link className={pagesCss.link} to="/exhibits">
          {t("exhibits.link")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeExhibitsSection;
