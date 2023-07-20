import styles from './styles.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles['educa-title']}>
        Educa
      </div>

      <div className={styles.actions}>
        <button>Product</button>
        <button>Services</button>
        <button>About</button>
        <button className={styles.login}>Login</button>
      </div>
    </div>
  );
}

export default Header;
