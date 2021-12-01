import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from '../public/assets/img/logo.png'
import background from '../public/assets/img/bg.png'
import mascot from '../public/assets/img/white.png'
import Arrow from '../public/assets/img/right-arrow.png'



const MainApp = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div  className={styles.main}>
        <div item xs={6} className={styles.left}>
          <div className={styles.atas}>
            <Image src={logo}/>
            <br/>
            <h1 className={styles.title}>Welcome to Lyrid</h1>
            <p className={styles.subtitle}>Get started by editing your Express Typescript App
              <br/>
              routes at src/entry/entry.ts
            </p>
          </div>
          <div className={styles.bawah}>
            <Image src={mascot}/>
          </div>
        </div>
        <div item xs={6} className={styles.right}>
          <div className={styles.docsEx}>
            <a href="https://docs.lyrid.io" className={styles.boxRight}>
              <div className={styles.boxIsi}>
                <div className={styles.boxTitle}>
                  <h5 className={styles.docs}>Documentation</h5>
                  <Image className={styles.arrow} src={Arrow} width={20} height={20} />
                </div>
                <p className={styles.ex}>Find in-depth information about Node.js features and API.</p>
              </div>
            </a>
            <a href="https://github.com/LyridInc" className={styles.boxRight}>
              <div className={styles.boxIsi}>
                <div className={styles.boxTitle}>
                  <h5 className={styles.docs}>Examples</h5>
                  <Image className={styles.arrow} src={Arrow} width={20} height={20} />
                </div>
                <p className={styles.ex}>Discover and deploy boilerplate example Node.js projects.</p>
              </div>
            </a>
          </div>
        </div>
      </div>


    </div>
  )
};

export default MainApp;

