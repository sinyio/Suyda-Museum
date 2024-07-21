import { FC } from "react"
import styles from './Header.module.css'
import { useTranslation } from "../../hooks/useTranslation/useTranslation"
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch"

const Header: FC = () => {
  const { text } = useTranslation('navigation')

  return (
    <header className={styles.header}>
      <img src="src\assets\suida-logo.svg" aria-hidden="true" className={styles.leftHeaderItem}/>
      <nav>
        <ul className={styles.navList}>
          <li>{text?.tickets}</li>
          <li>{text?.online_tour}</li>
          <li>{text?.collections}</li>
          <li>{text?.about_us}</li>
        </ul>
      </nav>
      <div className={styles.rightHeaderItem}>
        <LanguageSwitch />
      </div>
    </header>
  )
}

export default Header