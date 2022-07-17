
import styles from "./style.module.scss"
import LandingPage from "../landing/landing";
import NavbarComponent from "../../components/NavbarComponent";
function MainPage() {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.head}>
                    <NavbarComponent />
                </div>
                <div className={styles.body}>
                    <LandingPage />
                </div>

            </div>
        </>
    )
}
export default MainPage