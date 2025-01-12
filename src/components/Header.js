import logo from "../assets/logo.png";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.headerImage} src={logo} alt="A canvas" />
      <h1 className={styles.heading1}>ReactArt</h1>
      <p className={styles.paragraph}>A community of artists and art-lovers.</p>
    </header>
  );
}
