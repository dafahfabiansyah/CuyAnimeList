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
    router.push(`/search/${keyword}`);
    if (searchRef.current) {
      searchRef.current.value = '';
    }
  };

  return (
    <div className="relative">
      <input type="text" placeholder="cari anime...." className="rounded-full p-2 pr-10 text-sm md:text-base" ref={searchRef} onKeyDown={handleKeyBoard} />
      <button className="absolute right-2 top-1/2 transform -translate-y-1/2" onClick={handleSearchInput}>
        <MagnifyingGlass size={32} />
      </button>
    </div>
  );
};

export default InputSearch;