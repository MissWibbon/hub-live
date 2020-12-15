import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Fetch from 'isomorphic-unfetch'

export default function Navigation() {
  return (
    
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul>
              <li className="navbar-brand"><Link href="/">Home</Link></li>
              <li className="navbar-brand"><Link href="/upcoming">Upcoming</Link></li>
                <li className="navbar-brand"><Link href="/profile">My Shows</Link></li>
            </ul>
        </nav>
  )
}