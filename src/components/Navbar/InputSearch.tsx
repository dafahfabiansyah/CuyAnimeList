'use client';
import React, { useRef } from 'react';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';

const InputSearch = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSearchInput = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    performSearch();
  };

  const handleKeyBoard = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      performSearch();
    }
  };

  const performSearch = () => {
    const keyword = searchRef.current?.value;

    // Check if the keyword is not empty before performing the search
    if (keyword && keyword.trim() !== '') {
      router.push(`/search/${keyword}`);

      // reset search bar sesudah input
      if (searchRef.current) {
        searchRef.current.value = '';
      }
    }
  };

  // return (
  //   <div className="relative">
  //     <input type="text" placeholder="cari anime...." className="rounded-full border p-1 pr-10 text-sm md:text-base" ref={searchRef} onKeyDown={handleKeyBoard} />
  //     <button className="absolute right-2 top-1/2 transform -translate-y-1/2" onClick={handleSearchInput}>
  //       <MagnifyingGlass size={32} />
  //     </button>
  //   </div>
  // );
  return (
    <div className="relative">
      <input placeholder="cari anime..." className="w-full p-2 rounded-full" ref={searchRef} onKeyDown={handleKeyBoard} />
      <button className="absolute top-2 end-2" onClick={handleSearchInput}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
