import React, { useCallback } from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

import HeaderHome from "../HeaderHome";
import HeaderPost from "../HeaderPost";

import styles from "./styles.module.scss";

export const siteTitle = "64j0 Blog";

interface LayoutProps {
  home?: any;
}

const Layout: React.FC<LayoutProps> = ({ children, home }) => {
  return (
    <>
      <div className={styles['layout-container']}>
        <header className={styles.header}>
          {home ? (<HeaderHome />) : (<HeaderPost />)}
        </header>

        <main className={styles.main}>
          {children}
        </main>

        <footer className={styles.footer}>
          <span>
            &copy; Vinícius Gajo Marques Oliveira. All rights reserved.
          </span>
          <span className={styles['icon-container']}>
            <a href="https://twitter.com/viniciusgajo">
              <FaTwitter size="1.8rem" className={styles.item} />
            </a>
            <a href="https://github.com/64J0">
              <FaGithub size="1.8rem" className={styles.item} />
            </a>
            <a href="https://www.linkedin.com/in/vinicius-gajo/">
              <FaLinkedin size="1.8rem" className={styles.item} />
            </a>
          </span>
        </footer>
      </div>
    </>
  );
}

export default Layout;
