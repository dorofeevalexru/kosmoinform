import React from 'react';
import { useMobileMenu } from '../../../hooks/useMobileMenu';
import styles from './Header.module.css';

const Header = () => {
  const { isMenuOpen, toggleMenu, closeMenu } = useMobileMenu();

  return (
    <header className={styles.header}>
      <div className={styles.guapLogo}>
        <img 
          src="/assets/img/guap-sign-2.svg" 
          alt="SUAI LOGO" 
          height="40"
        />
        <h3 className={styles.logo}>"КосмоИнформ-Центр"</h3>
        <button 
          className={`${styles.burgerBtn} ${isMenuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
          aria-label="Меню"
        >
          <span className={`${styles.burgerLine} ${styles.top}`}></span>
          <span className={`${styles.burgerLine} ${styles.middle}`}></span>
          <span className={`${styles.burgerLine} ${styles.bottom}`}></span>
        </button>
      </div>
      <nav className={`${styles.navPanel} ${isMenuOpen ? styles.active : ''}`}>
        <a 
          href="https://guap.ru/n/cosmoinform/compet" 
          className={styles.navLink}
          onClick={closeMenu}
        >
          Компетенции
        </a>
        <a 
          href="https://guap.ru/n/cosmoinform" 
          className={styles.navLink}
          onClick={closeMenu}
        >
          О нас
        </a>
        <a 
          href="/login" 
          className={styles.navLink}
          onClick={closeMenu}
        >
          Войти
        </a>
      </nav>
    </header>
  );
};

export default Header;