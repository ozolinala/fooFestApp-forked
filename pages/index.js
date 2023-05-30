import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { HeroSection } from "@/components/HeroSection";
import { Newsletter } from "@/components/Newsletter";

export default function Home({ data }) {
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
        <div className={styles.landingLetters}>
          {" "}
          <h2>
            {" "}
            <div className={styles.about}> (ABOUT) </div>
            <div className={styles.written}>foo</div>fest ⸺ is the gateway to a
            mesmerizing journey where the Nordic summer ignites, the midnight
            sun dances, and the music takes center stage, enveloping you in an
            unforgettable celebration of sound and sensation.
          </h2>{" "}
        </div>
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
          <div>{/* <img src={myImage} alt="My Image" /> */}</div>
        </div>

        <div className={styles.announcement}>
          <div>{/* <img src={myImage} alt="My Image" /> */}</div>
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
