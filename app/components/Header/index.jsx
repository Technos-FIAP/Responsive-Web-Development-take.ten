import Image from "next/image";
import logo from "../../../public/logo2.png"
import Link from "next/link";
import style from "./estilo.module.css"
import login from "./../../../public/login.svg"

export default function index() {
    return (

        <header className={style.header}>
            <article className={style.logo}>
                <Image
                    src={logo}
                    sizes="width=100%, height=100%"
                    // width={100}
                    alt="logotipo"
                    priority="não sei"
                />
            </article>
            <article className={style.btnLogin}>
                <div className={style.conteudoBtn}>
                    <Image
                        src={login}
                    />
                    <Link href={"/login"}>
                        Entrar

                    </Link>
                </div>
            </article>
            <article>
                <nav>
                    <ul className={style.nav}>
                        <li><Link href={"/"}>Sobre nós</Link></li>
                        <li><Link href={"/"}>Ginástica laboral</Link></li>
                        <li><Link href={"/"}>Casos de sucesso</Link></li>
                        <li><Link href={"/"}>Contato</Link></li>
                        <li><Link href={"/"}>Minha conta</Link></li>
                    </ul>
                </nav>
            </article>
        </header>

    )
}