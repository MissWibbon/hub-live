import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navigation from '../components/navigation'
export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>3d sandbox</title>
                <link rel="icon" href="/favicon.ico" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r123/three.min.js" integrity="sha512-Q+IG0h7As6sfqE2t1Xf5IeamNyCXb4EXxGCA9Mlbpv7xtwurVHNdVDbyWeSQ3ulPf2FRlqeu77Ec3SJDdIR63w==" crossorigin="anonymous"></script>
            </Head>

                <Navigation/>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    3D
        </h1>
            </main>
        </div>
    )
}