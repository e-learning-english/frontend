import React from "react";
import LandingPageFooter from "../../components/LandingComponents/Footer";
import LandingPage1 from "../../components/LandingComponents/Page1";
import LandingPage2 from "../../components/LandingComponents/Page2";
import styles from "./style.module.scss";



function LandingPage() {
    return (
        <>
            <div className={styles.container}>
                <LandingPage1 />
                <LandingPage2 />
                <LandingPageFooter />
            </div>

        </>
    );
}
export default LandingPage
