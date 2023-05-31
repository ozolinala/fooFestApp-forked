// import Anchor from "./Anchor";
import Link from "next/link";
import Basket from "@/components/Basket";
import styles from "@/styles/Home.module.css";
import Basketicon from "@/components/Basketicon.js";
export default function Layout({ children }) {
  return (
    <>
      <nav className={styles.Navbar}>
        <Link href="./">
          <img className={styles.Logo} src="/pics/logo.svg" alt="Logo"></img>
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
        <div className={styles.navIcons}>
          <Link href="./basket">
            <img src="/pics/ticket.svg" alt="Cart"></img>
          </Link>
          <Link href="./CheckoutTest">
            <img src="/pics/user.svg" alt="Profile"></img>
          </Link>
        </div>
      </nav>
      <main>{children}</main>
      <div className={styles.Footer}>
        <div className={styles.Footerbox}>
          <div className={styles.leftFooter}>
            <img className={styles.longLogo} src="/pics/longLogo.svg" alt="Logo"></img>
            <p>Svinoy bygd, Faroe Islands</p>
            <a href="tel: +45 85 85 85 85">+45 85 85 85 85</a> <br></br>
            <a href="mailto: abc@example.com">info@foofest.dk</a>
            <br></br>
          </div>
          <div>
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
          </div>{" "}
          <div>
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
        </div>
        <p className={styles.copyright}>© This is a student project website. 2023</p>
      </div>
    </>
  );
}
