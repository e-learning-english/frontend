
import styles from "./style.module.scss"
import LandingPage from "../landing/landing";
import NavbarComponent from "../../components/NavbarComponent";
function MainPage() {

    return (
        <>
            <div className={styles.container}>

                <NavbarComponent />

                <div className={styles.body}>
                    <LandingPage />

                </div>


            </div>
        </>
    )
}
export default MainPage