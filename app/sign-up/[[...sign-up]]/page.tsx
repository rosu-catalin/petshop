import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="my-12 flex w-full items-center justify-center">
      <SignUp />
    </div>
  );
}
