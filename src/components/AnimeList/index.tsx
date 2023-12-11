import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface AnimeListProps {
  title: string;
  imageUrl: string;
  id: number;
}

const AnimeList: React.FC<AnimeListProps> = ({ title, imageUrl, id }) => {
  return (
    <Link href={`/${id}`} className="cursor-pointer">
      <Image src={imageUrl} alt={title} width={350} height={350} className="w-full max-h-80 object-cover" />
      {/* <Image src={imageUrl} alt={title} width={350} height={350} /> */}
      <h3 className="font-bold md:text-xl text-xs p-4 ">{title}</h3>
    </Link>
  );
};

export default AnimeList;
