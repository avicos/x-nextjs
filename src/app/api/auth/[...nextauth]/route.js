import NextAuth from "next-auth";

import GoogleProider from 'next-auth/providers/google';

const handler = NextAuth({
    providers: [
        GoogleProider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
});

export {handler as GET, handler as POST};