// import Anchor from "./Anchor";
import Link from 'next/link';
import Basket from "@/components/Basket";
import styles from "@/styles/Home.module.css";

export default function Layout({ children })  {
  
    return (
        <>
        <nav className={styles.Navbar}>
      <p>LOGO</p>
      <ul className={styles.navLinks}>
      <li>
        <Link href="./">Home</Link>
        </li>
        <li>
        <Link href="./about">About</Link>
        </li>
        <li>
        <Link href="./tickets">Tickets</Link>
        </li>
      </ul>
        </nav>
        <main>
        {children}
        </main>
        <Basket/>
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