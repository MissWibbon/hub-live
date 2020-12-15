import Head from 'next/head'
import styles from '../styles/Upcoming.module.css'
import Navigation from '../components/navigation'
import Link from 'next/Link'
import Image from 'next/image'
export default function Upcoming() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Upcoming Shows</title>
                <link rel="icon" href="/favicon.ico" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r123/three.min.js" integrity="sha512-Q+IG0h7As6sfqE2t1Xf5IeamNyCXb4EXxGCA9Mlbpv7xtwurVHNdVDbyWeSQ3ulPf2FRlqeu77Ec3SJDdIR63w==" crossorigin="anonymous"></script>
            </Head>

                <Navigation/>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Upcoming Shows
        </h1>

        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Artist</th>
      <th scope="col">Date/Time</th>
      <th scope="col">Price</th>
      <th scope="col">Attending</th>
      <th scope="col">Buy</th>

    </tr>
  </thead>
  <tbody>
      
    <tr>
      <th scope="row">1</th>
      <td><Image src="https://i.pinimg.com/736x/c9/f0/fe/c9f0fea4d0f6a298f4726334aeafcdf8.jpg" width={500}
        height={500} />Drama</td>
      <td>12/31/2020 @11pm</td>
      <td>$25</td>
      <td>32</td>
      <td><Link href="/drama">Buy Ticket</Link></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>1/10/2021 @10pm</td>
      <td>@fat</td>
      <td>32</td>
      <td><i>Going</i></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>2/3/2020 @9:30pm</td>
      <td>@twitter</td>
      <td>32</td>
      <td><Link href="/threed">Buy Ticket</Link></td>
    </tr>
  </tbody>
</table>
            </main>
        </div>
    )
}