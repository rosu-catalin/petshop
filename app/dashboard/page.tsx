'use client'

import {UserButton, useUser} from "@clerk/nextjs";

export default function Dashboard() {

    const { user, isLoaded } = useUser()

    return (
        <div>
            {isLoaded && user && (
                <>
                    <p>User is authenticated</p>
                </>
            )}
            <UserButton afterSignOutUrl="/"/>
        </div>
    )
}