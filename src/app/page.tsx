import axios from 'axios';
import AnimeList from '@/components/AnimeList';
import Link from 'next/link';

const Home = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`);
    const anime = response.data;

    return (
      <div>
        <div className="flex justify-between items-center p-4">
          <div className="capitalize text-2xl font-bold">paling populer</div>
          <Link href="/populer" className="capitalize md:text-xl text-md underline hover:text-blue-600 transition-all">
            lihat semua
          </Link>
        </div>
        <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 h-32 gap-4 px-4">
          {anime.data.map((data: any) => {
            return (
              <div key={data.mal_id} className="shadow-xl">
                <AnimeList title={data.title} imageUrl={data.images.webp.image_url} id={data.mal_id} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching anime data:', error);
    return <div>Something went wrong while fetching anime data. Please try again later.</div>;
  }
};

export default Home;
