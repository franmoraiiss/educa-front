import logo from '../../assets/logo.png';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles['educa-title']}>
        <img src={logo} />Educa
      </div>

      <div className={styles.actions}>
        <button>Aulas</button>
        <button>Trilhas</button>
        <button>Configurações</button>
        <button className={styles.login}>Sair</button>
      </div>
    </div>
  );
}

export default Header;
