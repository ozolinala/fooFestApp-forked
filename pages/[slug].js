import { useRouter } from "next/router";
import ArtistPage from "@/components/ArtistPage";

const SlugPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return <ArtistPage artistSlug={slug} />;
};

export default SlugPage;