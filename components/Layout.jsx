import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Layout.module.css';
import utilStyles from '../styles/utils.module.css';

const name = 'GRYTCARX';

export default function Layout({children, title, description, home}) {
  return (
    <div className={styles.container}>
        <Head>
            <title>{title}</title>
            <meta name='description' content={description}/>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/img/lago.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            ></Image>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/img/lago.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                ></Image>
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
        <nav>
          <Link href="/">
            <a>Inicio | </a>
          </Link>
          <Link href="/blog">
            <a>Blog | </a>
          </Link>
          <Link href="/contact">
            <a>Contacto</a>
          </Link>
        </nav>
      </header>

        <nav>
            <h1>Esto es un navbar</h1>
        </nav>
        <main>
            {children}
        </main>
        <footer>
            <h1>Esto es un footer</h1>
        </footer>
    </div>
  )
}

/* Damos valores por defecto a los props (parametros) en caso que no lleguen */
Layout.defaultProps =  {
    title:"Pagina Nextjs",
    description:"Esta es una p??gina de Nextjs"
}