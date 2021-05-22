// Pages that begin with '[' and end with ']' are dynamic pages in Next.js
import React, { useEffect } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import hljs from "highlight.js";

import Layout from "../../components/Layout";
import Date from "../../components/Date";

import { getAllPostIds, getPostData } from "../../lib/posts";

import styles from "./styles.module.scss";

interface PostData {
  title: string;
  date: string;
  tags?: string[];
  contentHtml: string;
}

const Post: React.FC<{ postData: PostData }> = ({ postData }) => {
  useEffect(() => {
    function highlightPreElement() {
      const preEl = document.querySelectorAll("pre");

      return (
        preEl && preEl.forEach((element) => {
          for (let child of element.children) {
            child.className = child.className.replace(/language-/, "");
            return hljs.highlightBlock((child as HTMLElement));
          }
        })
      );
    }

    highlightPreElement();
  }, []);

  return (
    <Layout home="">
      <Head>
        <title>{postData.title}</title>
      </Head>

      <article className={styles['post']}>
        <h1 className={styles['post__title']}>
          {postData.title}
        </h1>
        <div className={styles['post__meta']}>
          <Date dateString={postData.date} />
          <ul className={styles['post__meta-list']}>
            {postData.tags?.map((tag: string) => {
              return (
                <li className={styles['post__meta-list-item']}>
                  {tag}
                </li>
              );
            })}
          </ul>
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  // Return a list of possible value for id
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  // Fetch necessary data for the blog post using params.id
  const { params } = context;
  const postData = await getPostData(params?.id as string);
  return {
    props: {
      postData,
    },
  };
}
