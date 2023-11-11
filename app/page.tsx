import {auth, UserButton} from "@clerk/nextjs";

export default function Home() {

    const {user, userId} = auth()

    /* Todo
     - Header
     
     */

    return (
        <div>
            <p>Test</p>
            {user && <p>
                {userId}
            </p>}
            <UserButton afterSignOutUrl="/"/>
        </div>
    )
}