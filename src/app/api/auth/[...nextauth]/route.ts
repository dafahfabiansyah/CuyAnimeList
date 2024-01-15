import NextAuth, { AuthOptions } from 'next-auth';
import GitHubAuth from 'next-auth/providers/github';
import GoogleAuth from 'next-auth/providers/google';

const authOptions: AuthOptions = {
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

export default authOptions;

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
