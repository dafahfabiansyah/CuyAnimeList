import axios from 'axios';
import AnimeList from '@/components/AnimeList';
import Link from 'next/link';
import Header from '@/components/AnimeList/Header';

const Page = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`);
    // console.log(response);
    const populerAnime = response.data;
    // console.log(response.data);

    return (
      <div>
        <section>
          <Header title="Anime populer" linkHref="/populer" linkTitle="Lihat Semua" />
          <AnimeList api={populerAnime} />
        </section>
      </div>
    );
  } catch (error) {
    console.error('Error fetching anime data:', error);
    return <div>Something went wrong while fetching anime data. Please try again later.</div>;
  }
};

export default Page;
