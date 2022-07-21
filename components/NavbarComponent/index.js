import React from "react";
import Image from "next/image";
import styles from "./style.module.scss"
import Link from "next/link";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
function Navbar() {
  const [lang, setLang] = React.useState('');


  const handleChangeLang = (event) => {
    setLang(event.target.value);
  };


  return (
    <>
      <div className={styles.nav}>
        <div className={styles.wrap}>
          <div className={styles.logoCont}>
            <Link href="/">
              <Image className={styles.logo} src="/logo.svg" width={120} height={50} alt="noPhoto" />

            </Link>
          </div>
          <h3>
            <Link href="/about">
              Grammars
            </Link>
          </h3>

          <h3>TWS</h3>
          <h3>Vocabulary</h3>

          <input className={styles.input1} placeholder="Search" />

        </div>



      </div>
    </>
  );
}

export default Navbar;
