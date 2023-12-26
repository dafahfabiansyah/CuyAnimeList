'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderMenu from '@/components/Utilities/HeaderMenu';
import Pagination from '@/components/Utilities/Pagination';
import AnimeList from '@/components/AnimeList';

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState<any>();
  const [loading, setLoading] = useState(true);
  // get data from jikan api
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`);
        const fetchedTopAnime = response.data;
        setTopAnime(fetchedTopAnime);
      } catch (error) {
        console.error('Error fetching anime data:', error);
        return (
          <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <h3 className="loading" />
          </div>
        );
      } finally {
        setLoading(false); // Set loading to false after the request completes
      }
    };

    fetchData();
  }, [page]);

  // render UI animelist
  return (
    <div>
      <div>
        <section>
          <HeaderMenu title={`anime terpopuler #${page}`} />
          {loading ? (
            <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
              <div className="loading" />
            </div>
          ) : // Check if topAnime is defined before rendering AnimeList
          topAnime && topAnime.pagination ? (
            <AnimeList api={topAnime} />
          ) : (
            <div>Top anime data is not available.</div>
          )}
        </section>
      </div>
      <Pagination page={page} lastPage={topAnime?.pagination?.last_visible_page} setPage={setPage} />
    </div>
  );
};

export default Page;
