import Link from 'next/link';
import React from 'react';
import InputSearch from './InputSearch';

const Navbar = () => {
  return (
    <header className="bg-blue-400">
      <div className="flex justify-between items-center p-4">
        <Link href="/" className="font-bold text-white text-lg md:text-2xl">
          CuyAnimeList
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;
