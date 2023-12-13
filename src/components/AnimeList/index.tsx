import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface AnimeListProps {
  api: {
    data: Array<{
      mal_id: number;
      title: string;
      images: {
        webp: {
          image_url: string;
        };
      };
    }>;
  };
}

const AnimeList: React.FC<AnimeListProps> = ({ api }) => {
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 h-32 gap-4 px-4">
      {api.data.map((anime) => {
        return (
          <Link href={`/${anime.mal_id}`} key={anime.mal_id} className="cursor-pointer">
            <Image src={anime.images.webp.image_url} alt="..." width={350} height={350} className="w-full max-h-80 object-cover" />
            {/* <Image src={imageUrl} alt={title} width={350} height={350} /> */}
            <h3 className="font-bold md:text-xl text-xs p-4 ">{anime.title}</h3>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
