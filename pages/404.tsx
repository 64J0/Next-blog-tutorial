import React from "react";
import Head from "next/head";
import Image from "next/image";

import Layout from "../components/Layout";

// pages/404.js
const Custom404: React.FC = () => {
  return (
    <Layout home="">
      <Head>
        <title>404</title>
      </Head>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4rem" }}>
        <h1>404 - Página não encontrada</h1>
        <Image
          src="/images/404-image.png"
          alt="Image of a broken robot"
          width={400}
          height={300}
        />
      </div>
    </Layout>
  );
}

export default Custom404;
