import axios from 'axios';
import AnimeList from '@/components/AnimeList';
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
    return (
      <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
        <div className="flex justify-center items-center gap-4 flex-col ">
          <h3 className="text-color-accent text-xl font-bold">Please try again later.</h3>
          <h3 className="loading" />
        </div>
      </div>
    );
  }
};

export default Page;
