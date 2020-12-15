import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navigation from '../components/navigation'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r123/three.min.js" integrity="sha512-Q+IG0h7As6sfqE2t1Xf5IeamNyCXb4EXxGCA9Mlbpv7xtwurVHNdVDbyWeSQ3ulPf2FRlqeu77Ec3SJDdIR63w==" crossorigin="anonymous"></script>
      </Head>

<Navigation/>
      <main className={styles.main}>

        <h1 className={styles.title}>
          Welcome to Concert Hub
        </h1>
        <p className={styles.description}>
          Experience live concerts by your favorite performers from anywhere!
        </p>
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        <div className="iframe-wrap">
          <iframe src="https://hubs.mozilla.com/XAVmfKm/vital-vivid-meet?embed_token=b381fb1def3185e0580276ec886318a0" allow="microphone; camera; vr; speaker;"></iframe>
        </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
