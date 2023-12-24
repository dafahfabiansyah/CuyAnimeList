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
    const keyword = params.keyword;
    const decodeKeyword = decodeURI(keyword); // Use optional chaining to avoid potential issues
    // if (!keyword) {
    //   // Handle the case where keyword is undefined or falsy
    //   throw new Error(`Keyword is undefined or falsy ${keyword}`);
    // }

    const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodeKeyword}`;
    const response = await axios.get(apiUrl);
    // console.log('API Response:', response);

    const searchAnime = response.data;
    // console.log(searchAnime);

    return (
      <div>
        <section>
          <Header title={`pencarian untuk ${decodeKeyword} ....`} linkHref={''} linkTitle={''} />
          <AnimeList api={searchAnime} />
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
          <Link href="/" className="hover:text-color-accent text-color-primary">
            Kembali
          </Link>
        </div>
      </div>
    );
  }
};

export default Page;
