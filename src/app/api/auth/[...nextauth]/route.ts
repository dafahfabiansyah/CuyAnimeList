import NextAuth from 'next-auth/next';
import GitHubAuth from 'next-auth/providers/github';
import GoogleAuth from 'next-auth/providers/google';

const authOption = {
  providers: [
    GitHubAuth({
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

export default authOption;

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
