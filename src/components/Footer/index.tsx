import styles from './styles.module.scss';

const Footer = () => {
  return (
        <div className={styles.footer}>
      <div className={styles.educa}>
        <div className={styles.title}>Educa</div>
        <p>Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</p>
        <span>All rigths reserved.</span>
      </div>

      <div>
        <span className={styles.title}>Landings</span>
        <div className={styles.actions}>
          <a>Home</a>
          <a>Products</a>
          <a>Server</a>
        </div>
      </div>

      <div>
        <span className={styles.title}>Company</span>
        <div className={styles.actions}>
          <a>Home</a>
          <a>Products</a>
          <a>Server</a>
        </div>
      </div>

      <div className={styles.resources}>
        <span className={styles.title}>Resources</span>
        <div className={styles.actions}>
          <a>Home</a>
          <a>Products</a>
          <a>Server</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
