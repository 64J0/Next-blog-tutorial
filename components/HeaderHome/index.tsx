import React from "react";
import Link from "next/link";

import headerStyles from "./styles.module.scss";

const Header: React.FC = () => {
  return (
    <div className={headerStyles['header-home']}>
      <Link href="/contato">
        <img
          src="/images/profile.jpg"
          className={headerStyles['header-home__image']}
          alt="Vinícius Gajo"
        />
      </Link>
      <h1 className={headerStyles['header-home__title']}>
        Vinícius Gajo's Blog
      </h1>
    </div >
  );
}

export default Header;