import styles from '../../styles/HeroStyles/Hero.module.css';
import canoeLogo from '../../images/CanoeLogoWebV2.png'

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.welcomWrapper}>
        <img className={styles.logo} src={canoeLogo} />
        <span>welcome.</span>
      </div>
      <div className={styles.nameRoleWrapper}>
        <h1>Filo Vaesau</h1>
        <h2>Digital Craftsman | Developer</h2>
      </div>
    </div>
  );
}
