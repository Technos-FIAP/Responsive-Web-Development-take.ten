import style from './estilo.module.css'
import logo from '../../../public/logo.png'
import Image from 'next/image'

export default function Cadastro() {
    return (
        <main className={style.cadastro}>
            <section className={style.imgCadastro}>

            </section>
            <section className={style.formCadastro}>

                <Image
                    src={logo}
                   width={83}
                />

                <h2>Crie sua conta</h2>

                <form action="#" method="post">
                    <label htmlFor="Nome">Nome</label>
                    <input type="text" />

                    <label htmlFor="Email">Email</label>
                    <input type="email" />

                    <label htmlFor="Senha">Senha</label>
                    <input type="password" />

                    <label htmlFor="data">Data de Nascimento</label>
                    <input type="date" />

                    <label htmlFor="Nome">Altura</label>
                    <input type="number" />

                    <label htmlFor="Nome">Peso</label>
                    <input type="number" />

                    <label htmlFor="Nome">Gênero</label>
                    <select name="select" className={style.opcoes}>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino" selected>Feminino</option>
                        <option value="Outros">Outros</option>
                    </select>

                    <button>Criar conta</button>



                </form>
            </section>
        </main>
    )
}