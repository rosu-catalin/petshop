'use client';

import { NextUIProvider } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import Footer from '@/components/layout/footer';
import Navigation from '@/components/layout/navbar/navbar.component';

export function Providers({ children }: { children: React.ReactNode }) {
    const router = useRouter();

    return (
        <NextUIProvider navigate={router.push}>
            <Navigation />
            {children}
            <Footer />
        </NextUIProvider>
    );
}
