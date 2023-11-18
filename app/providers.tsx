'use client'

import {NextUIProvider} from '@nextui-org/react'
import Navigation from "@/components/layout/navbar/navbar.component";
import Footer from "@/components/layout/footer";

export function Providers({children}: { children: React.ReactNode }) {
    return (
        <NextUIProvider>
            <Navigation/>
            {children}
            <Footer/>
        </NextUIProvider>
    )
}