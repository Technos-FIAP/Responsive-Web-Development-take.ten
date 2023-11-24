import Image from 'next/image'
import style from './estilo.module.css'
import conquista1 from '../../../public/conquista_1.png'
import conquista2 from '../../../public/conquista_2.png'
import conquista3 from '../../../public/conquista_3.png'

export default function MinhaConta() {
    return (
        <main className={style.geral}>

            <h2>Minha conta</h2>

            <section className={style.minhasConquistas}>
                    <h3>Suas conquistas</h3>

                <div>
                    <div className={style.conquista}>
                        <div className={style.imgConquista}>
                            <Image
                                src={conquista1}
                            />
                        </div>
                        <div className={style.conteudoConquista}>
                            <h3>Lorem Ipsum</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                    </div>
                    <div className={style.conquista}>
                        <div className={style.imgConquista}>
                            <Image
                                src={conquista1}
                            />
                        </div>
                        <div className={style.conteudoConquista}>
                            <h3>Lorem Ipsum</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                    </div>
                    <div className={style.conquista}>
                        <div className={style.imgConquista}>
                            <Image
                                src={conquista1}
                            />
                        </div>
                        <div className={style.conteudoConquista}>
                            <h3>Lorem Ipsum</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                    </div>
                </div>

            </section>

            <section className={style.dadosPessoal}>
                <article>
                    <h3>Nome</h3>
                    <p>John Doe</p>

                    <h3>Data de nascimento</h3>
                    <p>10 de maio de 1985</p>

                    <h3>E-mail</h3>
                    <p>johndoe@email.com</p>
               </article>
                <article>
                    <h3>Altura</h3>
                    <p>1 metro e 80 centímetros</p>

                    <h3>Peso</h3>
                    <p>75 quilos</p>

                    <h3>Sexo</h3>
                    <p>Masculino</p>
               </article>
                <article>
                    <h3>Profissão   </h3>
                    <p>Desenvolvedor</p>

                    <h3>Nível de atividade física</h3>
                    <p>3/10</p>

                    <h3>Qt. de horas sedentárias</h3>
                    <p>6 horas</p>
               </article>
            </section>
        </main>
    )
}