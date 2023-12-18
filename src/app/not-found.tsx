'use client';
import React from 'react';
import { ListMagnifyingGlass } from '@phosphor-icons/react';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center gap-4 flex-col ">
        <ListMagnifyingGlass size={32} className="text-color-accent" />
        <h3 className="text-color-accent text-2xl font-bold">404 | NOT FOUND</h3>
        <Link href="/" className="hover:text-color-accent text-color-primary">
          Kembali
        </Link>
      </div>
    </div>
  );
};

export default Page;
