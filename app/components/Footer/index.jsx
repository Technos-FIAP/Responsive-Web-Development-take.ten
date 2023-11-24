import Image from "next/image"
import logo from "../../../public/logo.png"
import styles from "./estilo.module.css"
export default function index() {
    return(
        <footer className={styles.footer}>
            <Image
                src={logo}
                alt="logotipo do rodape"
                // sizes="width=69px, heith=56px"
                height={50}
                width={50}
            />
        </footer>
    )
}