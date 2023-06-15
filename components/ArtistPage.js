import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "@/styles/Lineup.module.css";

const ArtistPage = ({ artistSlug }) => {
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const response = await fetch("https://tan-chipped-baboon.glitch.me/bands");
        const jsonData = await response.json();

        const artist = jsonData.find((band) => band.slug === artistSlug);

        if (artist) {
          setArtist(artist);
        }
      } catch (error) {
        console.error("Error fetching artist data:", error);
      }
    };

    console.log(artistSlug);
    fetchArtist();
  }, [artistSlug]);

  if (!artist) {
    return <div>Loading artist..</div>;
  }

  return (
    
    <div className={styles.flex}>
        <div className={styles.artistDesc}>
      <h1>{artist.name}</h1>
      <div className={styles.info}>
      <div><strong>Band members:</strong>
      <ul className={styles.members}>
        {artist.members.map((member) => (
          <li key={member}>{member}</li>
        ))}
      </ul></div>
      <div>
      <p><strong>Genre:</strong> {artist.genre}</p></div>
      </div>
      <p>{artist.bio}</p>
      <div className={styles.tickets}>
      <h4>Want to hear them live?</h4>
      <Link href="./tickets">
        {" "}
        <p className={styles.writtenTickets}>
          Buy Tickets →
        </p>
      </Link></div>
    </div>
    <div className={styles.artistLogo}>
    <img src="pics/artist image.jpg" alt="Photo by Tanya Pro on Unsplash" className={styles.logo}/>
    {/* <img src={artist.logo} alt="Artist Image" /> */}
  </div>
    </div>
  );
};

export default ArtistPage;