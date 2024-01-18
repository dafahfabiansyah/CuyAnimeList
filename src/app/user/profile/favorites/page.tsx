import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const favorites = () => {
  return (
    <section className="mt-4">
      <h3 className="text-2xl text-color-primary capitalize mb-2">my favourite anime</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Link href="/" className="relative border-2 border-color-accent">
          <Image src="" alt="" width={350} height={350} className="w-full" />
          <div className="absolute flex items-center justify-center w-full bottom-0 bg-color-accent h-16">
            <h5 className="text-xl capitalize text-center">judul anime</h5>
          </div>
        </Link>
        <Link href="/" className="relative border-2 border-color-accent">
          <Image src="" alt="" width={350} height={350} className="w-full" />
          <div className="absolute flex items-center justify-center w-full bottom-0 bg-color-accent h-16">
            <h5 className="text-xl capitalize text-center">judul anime</h5>
          </div>
        </Link>
        <Link href="/" className="relative border-2 border-color-accent">
          <Image src="" alt="" width={350} height={350} className="w-full" />
          <div className="absolute flex items-center justify-center w-full bottom-0 bg-color-accent h-16">
            <h5 className="text-xl capitalize text-center">judul anime</h5>
          </div>
        </Link>
        <Link href="/" className="relative border-2 border-color-accent">
          <Image src="" alt="" width={350} height={350} className="w-full" />
          <div className="absolute flex items-center justify-center w-full bottom-0 bg-color-accent h-16">
            <h5 className="text-xl capitalize text-center">judul anime</h5>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default favorites;
