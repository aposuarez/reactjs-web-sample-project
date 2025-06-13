import React, { ReactNode } from "react";
import Head from "next/head";
import MenuBar from "../MenuBar";
import Footer from "../Footer";
import styles from './BaseLayout.module.css'

type Props = {
  title: string,
  isFooterVisible: boolean;
  children?: ReactNode;
};

const BaseLayout = ({ title, isFooterVisible, children  }: Props) => (
  <div className={styles.root}>
    <Head>
      <title>jmsuarez | {title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <header>
      <MenuBar />
    </header>

    <div className={styles.body}>
    {children}
    </div>

    {
      isFooterVisible 
      ?
      <footer>
        <Footer />
      </footer>
      :
      <></>
    }
  </div>
)

export default BaseLayout