import { useEffect, useState } from "react";

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
    return <div>Loading artist...</div>;
  }

  return (
    <div>
      <h1>{artist.name}</h1>
      <p>Genre: {artist.genre}</p>
      <p>{artist.bio}</p>
    </div>
  );
};

export default ArtistPage;