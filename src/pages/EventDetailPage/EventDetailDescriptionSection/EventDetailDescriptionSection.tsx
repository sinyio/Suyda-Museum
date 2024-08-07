import styles from "./EventDetailDescriptionSection.module.css";
import pagesCSS from "../../Pages.module.css";
import { useEventStore } from "../../../store/eventStore";
import { FC } from "react";

const EventDetailDescriptionSection: FC = () => {
  const event = useEventStore((state) => state.event);

  return (
    <section className={styles.descriptionSection}>
      <div className={styles.descriptionWrapper}>
        <h2 className={`${pagesCSS.sectionTitle} ${styles.title}`}>Описание</h2>
        <div className={styles.textBlock}>
          <p className={pagesCSS.description}>
            {event.full_description.split("\n").map((line: string, index: number) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};

export default EventDetailDescriptionSection;
