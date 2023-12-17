import React from 'react';
import Link from 'next/link';

interface HeaderProps {
  title: string;
  linkHref: string;
  linkTitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="capitalize text-2xl font-bold text-color-primary">{title}</h1>
      {linkHref && linkTitle ? (
        <Link href={linkHref} className="capitalize md:text-xl text-color-primary text-md underline hover:text-color-accent transition-all">
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
