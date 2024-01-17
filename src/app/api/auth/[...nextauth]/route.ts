// import NextAuth, { AuthOptions } from 'next-auth';
// import GitHubProvider from 'next-auth/providers/github';
// import GoogleAuth from 'next-auth/providers/google';

// const authOptions: AuthOptions = {
//   providers: [
//     GitHubProvider({
//       clientId: process.env.GITHUB_ID as string,
//       clientSecret: process.env.GITHUB_SECRET as string,
//     }),
//     GoogleAuth({
//       clientId: process.env.GOOGLE_CLIENT_ID as string,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
//     }),
//   ],

//   secret: process.env.NEXTAUTH_SECRET,
// };

// export default authOptions;

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };

// auth-config.ts
import NextAuth, { AuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import GoogleAuth from 'next-auth/providers/google';

const authOption = (): AuthOptions => {
  const authOptions: AuthOptions = {
    providers: [
      GitHubProvider({
        clientId: process.env.GITHUB_ID as string,
        clientSecret: process.env.GITHUB_SECRET as string,
      }),
      GoogleAuth({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      }),
    ],

    secret: process.env.NEXTAUTH_SECRET,
  };

  return authOptions;
};

const handler = NextAuth(authOption());

export { handler as GET, handler as POST, authOption };
