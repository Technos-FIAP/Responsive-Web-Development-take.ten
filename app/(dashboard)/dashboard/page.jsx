import style from './estilo.module.css'
import Image from 'next/image'
import Link from 'next/link'

import modelo from '../../../public/modelo.jpg'
import EntrarConta from '../../../public/EntrarConta.svg'
import play from '../../../public/btnPlay.svg'
import exercicio from '../../../public/exercicio.jpeg'


export default function Usuario() {
    return (
        <main className={style.geral}>
            <section className={style.olaUsuario}>
                <article className={style.perfilUsuario}>
                    <Image
                        src={modelo}
                        alt='modelo'
                    />

                    <p>Olá, <label>john Doe</label></p>
                </article>
                <article className={style.acessarConta}>
                    <Link href={"/minhaConta"}>Acessar minha conta </Link>
                    <Image
                        src={EntrarConta}
                        alt='icone de entrar'
                    />
                </article>
            </section>

            <section className={style.resultados}>
                <article>
                    <h3>95</h3>
                    <p>sessões finalizadas</p>
                </article>
                <article>
                    <h3>95</h3>
                    <p>dias ativo</p>
                </article>
                <article>
                    <h3>95</h3>
                    <p>conquistas</p>
                </article>
                <article>
                    <h3>95</h3>
                    <p>de flexibilidade</p>
                </article>
                <article>
                    <h3>95</h3>
                    <p>de rendimento</p>
                </article>
                <div className={style.iniciarSessao}>
                    <article >
                        <p>Iniciar sessão de exercícios</p>
                        <Image
                            src={play}
                        />
                    </article>
                </div>
            </section>
            <section className={style.perguntaChatbot}>
                <p>Faça uma pergunta ao nosso Chatbot</p>
                <article>
                    <input type="text" value="Escreva sua mensagem" />
                    <button>Enviar mensagem</button>
                </article>
            </section>
            <section className={style.listaExercicios}>
                <p>Exercícios</p>
                <div>
                    <article>
                        <Image
                            src={exercicio}
                            alt='pessoa fazendo alongamento'
                        />

                        <h3>Lorem Ipsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </article>
                    <article>
                        <Image
                            src={exercicio}
                            alt='pessoa fazendo alongamento'
                        />

                        <h3>Lorem Ipsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </article>
                    <article>
                        <Image
                            src={exercicio}
                            alt='pessoa fazendo alongamento'
                        />

                        <h3>Lorem Ipsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </article>
                    <article>
                        <Image
                            src={exercicio}
                            alt='pessoa fazendo alongamento'
                        />

                        <h3>Lorem Ipsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </article>
                    <article>
                        <Image
                            src={exercicio}
                            alt='pessoa fazendo alongamento'
                        />

                        <h3>Lorem Ipsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </article>
                    <article>
                        <Image
                            src={exercicio}
                            alt='pessoa fazendo alongamento'
                        />

                        <h3>Lorem Ipsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </article>


                </div>
            </section>
            <section className={style.equipeTabela}>
                <h3>Sua equipe</h3>
                <p>Acompanhe o desempenho de sua equipe</p>

                <table border="1" className={style.tabela}>
                    <tr className={style.tabelaTitulo}>
                        <td>INTEGRANTE</td>
                        <td>E-MAIL</td>
                        <td>NÚMERO DE CONQUISTAS</td>
                        <td>DATA DE NASCIMENTO</td>
                        <td>MELHOR DESEMPENHO</td>
                    </tr>
                    <tr>
                        <td>João Carlos</td>
                        <td>joao@email.com</td>
                        <td>45</td>
                        <td>10/05/1985</td>
                        <td>45</td>
                         
                    </tr>
                    
                </table>

            </section>
        </main>
    )
}