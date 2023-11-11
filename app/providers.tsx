'use client'

import {NextUIProvider} from '@nextui-org/react'
import Navigation from "@/components/layout/navbar/navbar.component";

export function Providers({children}: { children: React.ReactNode }) {
    return (
        <NextUIProvider>
            <Navigation/>
            {children}
        </NextUIProvider>
    )
}