// Assuming this is TypeScript

'use client';

import { getAnime } from '@/service/api-service';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import VideoPlayer from '@/components/Utilities/VideoPlayer';

interface AnimeDetailProps {
  params: {
    id: string;
  };
}

const Page: React.FC<AnimeDetailProps> = ({ params: { id } }) => {
  const [anime, setAnime] = useState<any>({
    title: '',
    year: '',
    synopsis: '', // Assuming you have a 'synopsis' property
    trailer: {
      youtube_id: '',
    },
    images: {
      webp: {
        image_url: '',
      },
      jpg: {
        image_url: '',
      },
    },
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const animeData = await getAnime(`anime/${id}`, '');
        setAnime(animeData.data);
      } catch (error) {
        console.error('Error fetching anime data:', error);
        return (
          <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <h3 className="loading" />
          </div>
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      {/* tittle and year from anime */}
      <div className="pt-4 px-4">
        {loading ? (
          <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="loading" />
          </div>
        ) : (
          <h3 className="text-color-primary text-2xl">
            {anime.title} - {anime.year}
          </h3>
        )}
      </div>
      {/* detail anime */}
      <div className="pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto">
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3>Peringkat</h3>
          <p>{anime.rank}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3>Skor</h3>
          <p>{anime.score}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3>Episode</h3>
          <p>{anime.episodes}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3>Status</h3>
          <p>{anime.status}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3>popularitas</h3>
          <p>{anime.popularity}</p>
        </div>
      </div>
      <div className="pt-4 px-4 flex flex-wrap sm:flex-nowrap gap-2 text-color-primary">
        <Image src={anime.images.webp.image_url} alt={anime.images.jpg.image_url} width={250} height={250} className=" w-full rounded object-cover" />
        <p className="pt-4 px-4 text-color-primary">{anime.synopsis}</p>
      </div>
      {/* video player  */}
      <div>
        <VideoPlayer youtubeId={anime.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Page;
