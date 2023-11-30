import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { Providers } from '@/app/providers';

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider afterSignInUrl="/" afterSignUpUrl="/">
            <html lang="en">
                <body className={GeistSans.className}>
                    <Providers>{children}</Providers>
                </body>
            </html>
        </ClerkProvider>
    );
}
