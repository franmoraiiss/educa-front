import logo from '../../assets/logo.png';
import styles from './styles.module.scss';

const Footer = () => {
  return (
        <div className={styles.footer}>
      <div className={styles.educa}>
        <div className={styles.title}><img src={logo} /> Educa</div>
        <p>Uma plataforma de estudos completa para você aprender do seu jeito, da sua maneira e no seu tempo.</p>
        <span>Todos os direitos reservados.</span>
      </div>     

      <div className={styles.resources}>
        <span className={styles.title}>Resources</span>
        <div className={styles.actions}>
          <a>Home</a>
          <a>Aulas</a>
          <a>Trilhas</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
