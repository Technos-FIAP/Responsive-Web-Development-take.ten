

import Link from 'next/link'
import Image from 'next/image'
import login from '../../../public/logo.png'
import styles from './page.module.css'

export default function LoginPage() {
    return (
        <>
            
            <section className={styles.login}>

                <Image
                    src={login}
                    width={190} 
                    height={98}
                    alt='logo da empresa'
                    
                />
                <h2>Seja bem-vindo(a)!</h2>
                <form>
                    <input type="email" placeholder="E-mail" />
                    <input type="password" placeholder="Senha" />
                    <button><Link href="/dashboard" type="submit" className={styles.butaoChato}>ENTRAR</Link></button>


                    <p>Ainda não tem uma conta? <a href="/cadastro">Solicite uma agora mesmo</a></p>
                </form>
            </section>
        </>
    )
}