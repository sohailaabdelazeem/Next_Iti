import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import { pages } from 'next/dist/build/templates/app-page';

const authConfig = {
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        authorized({ auth, request }) {
            return !!auth.user;

        }
    },
    pages: {
        signIn: '/login',
    }
 }

export const {auth,signIn,handlers : {GET,POST}}=NextAuth(authConfig);
