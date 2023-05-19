import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
// import myImage from "pages/pics/demo.jpg";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";

export default function Home({data}) {
  return (
    <>
      <Head>
        <title>fooFest</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.Main}>
        <HeroSection />
        <div className={styles.announcement}>
          <div>
            <h2>THE BEATLES ARE COMING</h2>
            <p>
              Officia eiusmod labore fugiat anim duis et anim consectetur enim
              ex aute nisi aute sunt proident. Excepteur magna ea ea ut cillum
              incididunt exercitation consequat. Dolor minim id ea ullamco
              excepteur commodo ea labore deserunt aliquip voluptate anim aute
              proident. Officia ut et enim Lorem veniam. Veniam sunt Lorem
              labore Lorem aliqua velit aliquip voluptate cupidatat dolor
              aliqua. Aute laborum esse aute ea amet.
            </p>
          </div>
          <div>
            {/* <img src={myImage} alt="My Image" /> */}
          </div>
        </div>

        <div className={styles.announcement}>
          <div>
            {/* <img src={myImage} alt="My Image" /> */}
          </div>
          <div>
            <h2>THE BEATLES ARE COMING</h2>
            <p>
              Officia eiusmod labore fugiat anim duis et anim consectetur enim
              ex aute nisi aute sunt proident. Excepteur magna ea ea ut cillum
              incididunt exercitation consequat. Dolor minim id ea ullamco
              excepteur commodo ea labore deserunt aliquip voluptate anim aute
              proident. Officia ut et enim Lorem veniam. Veniam sunt Lorem
              labore Lorem aliqua velit aliquip voluptate cupidatat dolor
              aliqua. Aute laborum esse aute ea amet.
            </p>
          </div>
        </div>
        <Newsletter />
      </main>
    </>
  );
}
