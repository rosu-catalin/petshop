import { Suspense } from 'react';
import SkeletonAnimalCards from '@/app/category/components/skeleton-animal-cards';
import AnimalCard from '@/app/category/components/card/animal-card';
import { auth } from '@clerk/nextjs';
import getFavoritesPets from '@/services/get-favorite-pets';

const AnimalCards = async ({ entries }: { entries: Pet[] }) => {
    const { userId } = auth();

    const favorites = await getFavoritesPets(userId);

    return (
        <Suspense fallback={<SkeletonAnimalCards />}>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-pets md:gap-4">
                {entries.length === 0 && <p>No pets found</p>}
                {entries.map((pet) => (
                    <AnimalCard pet={pet} key={pet.id} favorites={favorites} />
                ))}
            </div>
        </Suspense>
    );
};

export default AnimalCards;
