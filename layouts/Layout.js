// import Anchor from "./Anchor";
import Link from 'next/link';
import Basket from "@/components/Basket";
import styles from "@/styles/Home.module.css";
import Basketicon from "@/components/Basketicon.js"
export default function Layout({ children })  {
  
    return (
        <>
        <nav className={styles.Navbar}>
      <Link href="./"> 
      <img className={styles.Logo} src="/pics/logo.svg" alt='Logo'></img>
      </Link>
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
          <div className={styles.Footerlinks}>
          <ul>
        <Link href="./"> 
      <img className={styles.Logo} src="/pics/logo.svg" alt='Logo'></img>
      </Link>
      <p>Svinoy bygd, Faroe Islands</p>
      <p>+45 85 85 85 85</p>
<p>info@foofest.dk</p>
<br></br>

</ul>
      <ul>
        <li>
        <Link href="./about">ABOUT</Link>
        </li>
        <li>
          <a href="./program">PROGRAM</a>
        </li>
        <li>
        <Link href="./tickets">TICKETS</Link>
        </li>
      </ul>
      <ul>
        <li>
        <Link href="#">FAQ</Link>
        </li>
        <li>
          <a href="#">TERMS & CONDITIONS</a>
        </li>
        <li>
          <a href="#">PRIVACY POLICY</a>
        </li>
        <li>
        <Link href="#">COOKIE POLICY</Link>
        </li>
      </ul>
      </div>
      <p>© This is a student project website. 2023</p>
    </div>
        </>
    );
}