import React from 'react';
import { authUserSession } from '@/service/auth-service';
import Image from 'next/image';
import Link from 'next/link';
const page = async () => {
  const user = await authUserSession();
  //   console.log(user);
  return (
    <div>
      <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
        <div className="flex justify-center items-center gap-4 flex-col">
          <h3 className="capitalize">profile page</h3>
          <Image src={user?.image ?? '/default-profile-image.jpg'} alt="photo profile" width={250} height={250} />
          <p className="text-color-accent text-2xl font-bold">welcome, {user?.name}</p>
          <div className="py-8 flex gap-4">
            <Link href="/user/profile/favorites" className="capitalize bg-color-accent text-color-dark font-bold px-4 py-3">
              my favourites
            </Link>
            <Link href="/user/profile/comment" className="capitalize bg-color-accent text-color-dark font-bold px-4 py-3">
              my comment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
