import Link from 'next/link';
import React from 'react';
import InputSearch from './InputSearch';

const Navbar = () => {
  return (
    <header className="bg-color-accent">
      <div className="flex justify-between items-center p-4">
        <Link href="/" className="font-bold text-lg md:text-2xl md:items-center hover:text-red-600">
          CuyAnimeList
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;
