import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";

import { IoIosBookmarks } from "react-icons/io"

function LandingPage1() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setInterval(() => {
      setCount(prev => prev + 1)
    }, 9000)
  }, [])

  const backStyle = {
    backgroundImage: `url(https://picsum.photos/id/${count}/600/400)`,
  }

  return (
    <>

      <div className={styles.block1} style={backStyle}>
        <div className={styles.box1}>


          <h2>Think about it</h2>
          <h3> lorem ipsum dolar think good night
          </h3>
          <h1>You can do it</h1>
        </div>
        <div className={styles.cardsWrap}>
          <div className={styles.cards1}>
            <div className={styles.card1}>
              <IoIosBookmarks className={styles.icons1} />
              <p>Test</p>
            </div>
            <div className={styles.card1}>
              <IoIosBookmarks className={styles.icons1} />
              <p>Test</p>
            </div>
            <div className={styles.card1}>
              <IoIosBookmarks className={styles.icons1} />
              <p>Test</p>
            </div>
           
          </div>
        </div>

      </div>


    </>
  );
}
export default LandingPage1
