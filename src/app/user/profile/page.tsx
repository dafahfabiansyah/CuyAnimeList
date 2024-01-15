import React from 'react';
import { authUserSession } from '@/service/auth-service';
import Image from 'next/image';
const page = async () => {
  const user = await authUserSession();
  //   console.log(user);
  return (
    <div>
      <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
        <div className="flex justify-center items-center gap-4 flex-col">
          <h3>profilr page</h3>
          <Image src={user?.image ?? '/default-profile-image.jpg'} alt="photo profile" width={250} height={250} />
          <p className="text-color-accent text-2xl font-bold">welcome, {user?.name}</p>
        </div>
      </div>
    </div>
  );
};

export default page;
