import React from "react";
import styles from "./styles.module.scss";

import HeaderHome from "../HeaderHome";
import HeaderPost from "../HeaderPost";

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

        <footer className={`${styles.footer} drac-text-white`}>
          <span>
            &copy; Vinícius Gajo Marques Oliveira. All rights reserved.
          </span>
          <span>
            twitter-logo; github-logo; linkedin-logo;
          </span>
        </footer>
      </div>
    </>
  );
}

export default Layout;
