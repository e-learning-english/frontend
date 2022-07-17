import React from "react";
import styles from "./style.module.scss";

import { IoIosBookmarks, IoIosArrowForward } from "react-icons/io"


function LandingPageFooter() {
    return (
        <>


            <div className={styles.footer}>
                <div className={styles.wrap}>
                    <div className={styles.boxA1}>
                        <h1>About</h1>
                        <p className={styles.p1}>Masterstudy is Education WordPress theme featured by Learning Management System (LMS) for online education.
                            Developed by StylemixThemes.
                            <br />
                            <br />
                            Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Morbi at egestas magna.


                        </p>

                        <button>Learning Now</button>
                    </div>
                    <div className={styles.boxP2}>
                        <h1>Popular Courses</h1>


                        <h3>Beginer</h3>
                        <h3>Beginer</h3>
                        <h3>Beginer</h3>
                        <h3>Beginer</h3>
                        <h3>Beginer</h3>
                        <h3>Beginer</h3>
                        <h3>Beginer</h3>

                    </div>
                    <div className={styles.boxP3}>
                        <h1>Pages</h1>
                        <ul>
                            <li>
                                <IoIosArrowForward /><p>lorem ipsum </p>
                            </li>
                            <li>
                                <IoIosArrowForward /><p>lorem ipsum </p>
                            </li>
                            <li>
                                <IoIosArrowForward /><p>lorem ipsum </p>
                            </li>
                            <li>
                                <IoIosArrowForward /><p>lorem ipsum </p>
                            </li>
                            <li>
                                <IoIosArrowForward /><p>lorem ipsum </p>
                            </li>
                            <li>
                                <IoIosArrowForward /><p>lorem ipsum </p>
                            </li>
                          
                            
                        </ul>
                    </div>
                    <div className={styles.boxC4}>
                        <h1>Contact</h1>
                        <div className={styles.flex}>
                            <IoIosBookmarks className={styles.icon} /> <p>Contact Us</p>
                        </div>
                        <div className={styles.flex}>
                            <IoIosBookmarks className={styles.icon} /> <p>Contact Us</p>
                        </div>
                        <div className={styles.flex}>
                            <IoIosBookmarks className={styles.icon} /> <p>Contact Us</p>
                        </div>
                        <div className={styles.flex}>
                            <IoIosBookmarks className={styles.icon} /> <p>Contact Us</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default LandingPageFooter
