import { SignIn } from "@clerk/nextjs";

export default function Page() {

    return (
        <div className='w-full my-12 flex justify-center items-center'>
            <SignIn />
        </div>
    );
}