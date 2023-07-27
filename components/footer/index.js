import Link from "next/link";
import React from "react";

import styles from './styles.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      Made with by&nbsp;
      <Link href="https://github.com/eraykarakasli" target="_blank">
        Eray Karakaşlı
      </Link>
    </footer>
  );
}

export default Footer;
