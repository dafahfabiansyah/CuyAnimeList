import axios from 'axios';
import AnimeList from '@/components/AnimeList';
import Link from 'next/link';
import Header from '@/components/AnimeList/Header';

type PageParams = {
  params: {
    keyword: string; // Ensure that keyword is a string
  };
};

const Page = async ({ params }: PageParams) => {
  try {
    const keyword = params.keyword; // Use optional chaining to avoid potential issues
    // if (!keyword) {
    //   // Handle the case where keyword is undefined or falsy
    //   throw new Error(`Keyword is undefined or falsy ${keyword}`);
    // }

    const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`;
    const response = await axios.get(apiUrl);
    // console.log('API Response:', response);

    const searchAnime = response.data;
    // console.log(searchAnime);

    return (
      <div>
        <section>
          <Header title={`pencarian untuk ${keyword} ....`} linkHref={''} linkTitle={''} />
          <AnimeList api={searchAnime} />
        </section>
      </div>
    );
  } catch (error) {
    console.error('Error fetching anime data:', error);
    return <div>Something went wrong while fetching anime data. Please try again later.</div>;
  }
};

export default Page;