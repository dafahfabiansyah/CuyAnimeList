import Link from 'next/link';
import React from 'react';
import { authUserSession } from '@/service/auth-service';

const UserActionButton = async () => {
  const user = await authUserSession();
  const actionLabel = user ? 'sign out' : 'sign in';
  const actionURL = user ? '/api/auth/signout' : '/api/auth/signin';
  // console.log(user);
  return (
    <div className="flex justify-between gap-2">
      {user ? (
        <Link href="/user/profile" className="capitalize hover:text-color-primary py-1 transition-all">
          profile
        </Link>
      ) : null}
      <Link href={actionURL} className="capitalize bg-color-dark text-color-accent hover:bg-color-accent hover:text-color-dark transition-all py-1 px-8">
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserActionButton;
