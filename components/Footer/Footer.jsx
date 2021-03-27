import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  const date = new Date();
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.copyright}>
          <div>A Vagabond Dream company</div>
          <div className={styles.separator}> | </div>
          <div>© {date.getFullYear()}</div>
        </div>
        <div className={styles.links}>
          <div>
            <Link href="/imprint">
              <a>Imprint</a>
            </Link>
          </div>
          <div className={styles.separator}> | </div>
          <div>
            <Link href="/privacy">
              <a>Privacy</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
