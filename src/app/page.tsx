// Page.js
import React from 'react';
import AnimeList from '@/components/AnimeList';
import Header from '@/components/AnimeList/Header';
import { getAnime } from './service/api-service';

const Page = async () => {
  try {
    const TopAnime = await getAnime('top/anime', 'limit=10');

    return (
      <div>
        <section>
          <Header title="Anime populer" linkHref="/populer" linkTitle="Lihat Semua" />
          <AnimeList api={TopAnime} />
        </section>
      </div>
    );
  } catch (error) {
    console.error('Error handling in Page:', error);
    return (
      <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
        <div className="flex justify-center items-center gap-4 flex-col">
          <h3 className="text-color-accent text-xl font-bold">Please try again later.</h3>
          <h3 className="loading" />
        </div>
      </div>
    );
  }
};

export default Page;
