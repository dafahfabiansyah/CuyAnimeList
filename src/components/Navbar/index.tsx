import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-blue-400">
      <div className="flex justify-between items-center p-4">
        <Link href="/" className="font-bold text-white text-lg md:text-2xl">
          CuyAnimeList
        </Link>
        <input type="text" placeholder="cari anime...." className="rounded-full p-2 capitalize text-sm md:text-base" />
      </div>
    </header>
  );
};

export default Navbar;
