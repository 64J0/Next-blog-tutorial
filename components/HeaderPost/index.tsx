import React from "react";
import Link from "next/link";
import { FiHome, FiChevronLeft } from "react-icons/fi";

import headerStyles from "./styles.module.scss";

const HeaderPost: React.FC = () => {
  return (
    <div className={headerStyles['header-post']}>
      <Link href="/contato">
        <a>
          <img
            src="/images/profile.jpg"
            className={headerStyles['header-post__image']}
            alt={"Uma foto minha"}
          />
        </a>
      </Link>
      <h2 className={headerStyles['header-post__back-home']}>
        <Link href="/">
          <a>
            <FiChevronLeft size="4rem"
              className={headerStyles['header-post__move-left']}
            />
            <FiHome size="4rem" />
          </a>
        </Link>
      </h2>
    </div>
  );
}

export default HeaderPost;