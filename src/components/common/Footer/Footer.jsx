import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
          <img 
            src="/assets/img/s_guap_w.svg" 
            alt="Логотип ГУАП" 
            width="120" 
          />
          <div className={styles.copyright}>
            © {currentYear} Все права защищены
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;