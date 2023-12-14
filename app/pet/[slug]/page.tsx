import MaxWidthWrapper from '@/components/max-width-wrapper';
import Image from 'next/image';
import PetBadgeDetails from '@/app/pet/components/pet-badge-details';
import PetAdoptionButton from '@/app/pet/components/pet-adoption-button';
import PetsAvailableForAdoption from '@/components/homepage/pets-available-for-adoption';
import { auth, SignedIn } from '@clerk/nextjs';

async function getPetById(id: string) {
    const res = await fetch(`${process.env.API_URL}/animals?id=${id}`, {
        next: {
            revalidate: 0
        }
    });

    if (!res.ok) {
        throw new Error('Category not found!');
    }

    const data = await res.json();

    if (Array.isArray(data) && data.length > 0) {
        return data[0];
    } else {
        throw new Error('Animal not found!');
    }
}

async function Page({ params: { slug } }: { params: { slug: string } }) {
    const pet: Pet = await getPetById(slug);
    const { userId } = auth();

    return (
        <MaxWidthWrapper className="my-8">
            <div className="mb-4 grid-cols-2 gap-4 md:grid">
                <Image
                    alt={`${pet.name} image`}
                    className="h-[400px] w-full rounded border object-cover md:h-[500px]"
                    width={1080}
                    height={500}
                    src={pet.image}
                />
                <div className="mt-6 w-full lg:mt-0 lg:py-6 lg:pl-10">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {pet.name}
                    </h1>
                    <PetBadgeDetails pet={pet} />
                    <div
                        className="prose my-4"
                        dangerouslySetInnerHTML={{ __html: pet.description }}
                    ></div>
                    <SignedIn>
                        <PetAdoptionButton pet={pet} userId={userId} />
                    </SignedIn>
                </div>
            </div>
            <PetsAvailableForAdoption />
        </MaxWidthWrapper>
    );
}

export default Page;
