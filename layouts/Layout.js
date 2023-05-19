// import Anchor from "./Anchor";
import Link from 'next/link';
import Basket from "@/components/Basket";
import styles from "@/styles/Home.module.css";
import {Basketicon} from "@/components/Basketicon.js"
export default function Layout({ children })  {
  
    return (
        <>
        <nav className={styles.Navbar}>
      <p><Link href="./">Home</Link></p>
      <ul className={styles.navLinks}>
      <li>
        <Link href="./about">ABOUT</Link>
        </li>
      <li>
        <Link href="./lineup">LINE-UP</Link>
        </li>
        <li>
        <Link href="./program">PROGRAM</Link>
        </li>
        <li>
        <Link href="./tickets">TICKETS</Link>
        </li>
      </ul>
      <div><Link href="./basket">
      <img src="/pics/ticket.svg" alt='Cart'></img></Link>
      <Link href="./checkout">
      <img src="/pics/user.svg" alt='Profile'></img></Link>
</div>
        </nav>
        <main>
        {children}
        </main>
        <div className={styles.Footer}>
      <p>LOGO</p>
      <ul>
        <li>
        <Link href="./about">About</Link>
        </li>
        <li>
          <a href="#">Global</a>
        </li>
        <li>
        <Link href="./tickets">Tickets</Link>
        </li>
      </ul>
    </div>
        </>
    );
}