import React, { useRef, useEffect } from "react";
import Head from "next/head";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

import Layout from "../../components/Layout";
import GithubContribGraph from "../../components/GithubContribGraph";

import Age from "../../utils/Age";
import { getGithubData } from "../../lib/github";

import styles from "./styles.module.scss";

interface ContribChartHTML {
  contribChartHTML: string;
}

const Contato: React.FC<ContribChartHTML> = ({ contribChartHTML }) => {
  const pEl = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const defineMyAge = (): void => {
      const myAge = new Age();

      const myAgeMessage = `Saudações leitor, meu nome é Vinícius Gajo Marques Oliveira e tenho ${myAge.getMyAge()} anos.`;
      pEl.current ? pEl.current.innerHTML = myAgeMessage : null;
    };

    defineMyAge();
  }, []);

  return (
    <Layout home="">
      <Head>
        <title>Contato</title>
      </Head>

      <div className={styles.contact}>

        <section className={styles['contact__about']}>
          <h1>
            Sobre mim:
          </h1>
          <p ref={pEl}>
            Saudações leitor, meu nome é Vinícius Gajo Marques Oliveira e tenho X anos.
          </p>
          <p>
            Finalizei minha graduação no curso de Engenharia Mecatrônica no <a href="http://www.divinopolis.cefetmg.br/">CEFET-MG</a> e atualmente estou trabalhando como dev full-stack na <a href="https://jmvtechnology.com/">JMV Technology</a>. Gosto bastante de ler e aprender novas coisas, por isso decidi entrar no ramo da tecnologia.
          </p>
          <p>
            Antes disso já fui analista de redes de teleprocessamento no NOC (<i>Network Operations Center</i>) da <a href="https://www.soumaster.com.br/">Master Internet</a> e estagiário de engenharia na <a href="http://fullengenharia.com.br/">Full Engenharia</a>.
          </p>
        </section>

        <section className={styles['contact__networks']}>
          <h2>Entre em contato:</h2>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/vinicius-gajo/">
                <FaLinkedin size="2rem" />
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/64J0">
                <FaGithub size="2rem" />
                GitHub
              </a>
            </li>
            <li>
              <a href="https://twitter.com/viniciusgajo">
                <FaTwitter size="2rem" />
                Twitter
              </a>
            </li>
          </ul>
        </section>
      </div>

      <GithubContribGraph contribChartHTML={contribChartHTML} />
    </Layout>
  );
}

export default Contato;

export async function getStaticProps() {
  const contribChartHTML = await getGithubData();

  return {
    props: {
      contribChartHTML
    },
    revalidate: 1 * 60 * 60 // 1 hora
  };
}


