import Image from 'next/image'
import styles from './page.module.css'
import coracao from '../../public/coracao.svg'
import cadeira from '../../public/cadeira.svg'
import boneco from '../../public/boneco.svg'
import alter from '../../public/alter.svg'
import people from '../../public/people.svg'
import escritorio from '../../public/escritorio.jpeg'
import logo from '../../public/logo.png'

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.conteudoHome}>
        <h2>
          Ações pequenas, ganhos enormes na saúde do trabalho
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare aliquam elit, eget efficitur quam rhoncus id. Curabitur a laoreet tellus. Vestibulum diam est, laoreet non elit ac,
        </p>

        <button>Começar agora</button>
      </section>

      <section className={styles.academiaIcons}>
        <nav>
          <ul>
            <li>
              <Image
                src={coracao}
              />
              <p>Lorem Ipsum dolot sit</p>
            </li>
            <li>
              <Image
                src={cadeira}

              />
              <p>Lorem Ipsum dolot sit</p>
            </li>
            <li>
              <Image
                src={boneco}

              />
              <p>Lorem Ipsum dolot sit</p>
            </li>
            <li>
              <Image
                src={alter}

              />
              <p>Lorem Ipsum dolot sit</p>
            </li>
            <li>
              <Image
                src={people}
              />
              <p>Lorem Ipsum dolot sit</p>
            </li>
          </ul>
        </nav>
      </section>
      <section className={styles.SessaoEscritorio}>
        <article className={styles.ImgEscritorio}>
          {/* <Image
            src={escritorio}
          /> */}
        </article>
        <article className={styles.conteudoEscritorio}>
          <h2>Lorem ipsum dolor sit amet  </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur varius massa, nec gravida tellus. Proin laoreet rutrum tellus eu posuere. Cras fringilla aliquam efficitur. <br /><br />

            ed auctor semper egestas. Aliquam eget sodales erat. In eget scelerisque nunc. Curabitur viverra ultricies ullamcorper. <br /><br />

            Donec vestibulum at diam ac iaculis. Nam ipsum est, tristique.
          </p>

          <button>Iniciar</button>
        </article>
      </section>
      <section className={styles.SessaoDores}>
        <article className={styles.ImgDores}>
          {/* <Image
            src={Dores}
          /> */}
        </article>
        <article className={styles.conteudoDores}>
          <h2>Lorem ipsum dolor sit amet  </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur varius massa, nec gravida tellus. Proin laoreet rutrum tellus eu posuere. Cras fringilla aliquam efficitur. <br /><br />

            ed auctor semper egestas. Aliquam eget sodales erat. In eget scelerisque nunc. Curabitur viverra ultricies ullamcorper. <br /><br />

            Donec vestibulum at diam ac iaculis. Nam ipsum est, tristique.
          </p>

          <button>Iniciar</button>
        </article>
      </section>
      <section className={styles.beneficios}>
        <ul>
          <li>
            <article>
              <h2>Maior flexibilidade</h2>
              <Image
                src={logo}
                // sizes='width=48px'
                width={48}
              />
            </article>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur varius massa, nec gravida tellus. Proin laoreet rutrum tellus eu posuere. Cras fringilla aliquam efficitur.
            </p>
          </li>
          <li>
            <article>
              <h2>Maior resistência</h2>
              <Image
                src={logo}
                // sizes='width=48px'
                width={48}
              />
            </article>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur varius massa, nec gravida tellus. Proin laoreet rutrum tellus eu posuere. Cras fringilla aliquam efficitur.
            </p>
          </li>
          <li>
            <article>
              <h2>Maior produtividade</h2>
              <Image
                src={logo}
                // sizes='width=48px'
                width={48}
              />
            </article>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur varius massa, nec gravida tellus. Proin laoreet rutrum tellus eu posuere. Cras fringilla aliquam efficitur.
            </p>
          </li>
        </ul>
      </section>
      <section className={styles.estatistica}>
        <article>
          <ul>
            <li>
              <h3>95%</h3>
              <p>Lorem ipsum dolor</p>
            </li>
            <li>
              <h3>1203+</h3>
              <p>Lorem ipsum dolor</p>
            </li>
            <li>
              <h3>942+</h3>
              <p>Lorem ipsum dolor</p>
            </li>
            <li>
              <h3>450K</h3>
              <p>Lorem ipsum dolor</p>
            </li>
            <li>
              <h3>2.5</h3>
              <p>Lorem ipsum dolor</p>
            </li>
          </ul>
        </article>

      </section>
    </main>
  )
}
