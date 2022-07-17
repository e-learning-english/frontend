import React from "react";
import Image from "next/image";
import styles from "./style.module.scss"
import Link from "next/link";
function Navbar() {


  return (
    <>
      <div className={styles.nav}>
        <div className={styles.logoCont}>
          <Link href="/">
            <Image className={styles.logo} src="/logo.svg" width={200} height={60} alt="noPhoto" />

          </Link>
        </div>
        <h3>
          <Link href="/about">
            Grammars
          </Link>
        </h3>
        <input className={styles.input1} placeholder="Search" />

      </div>
    </>
  );
}

export default Navbar;
