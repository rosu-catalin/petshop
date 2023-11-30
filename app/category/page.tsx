import MaxWidthWrapper from '@/components/max-width-wrapper';
import { getPetsFilteredBy } from '@/services/get-pets-filtered-by';
import CategoryFilters from '@/app/category/components/category-filters';
import { getBreedsByCategory } from '@/services/get-breeds-by-category';
import Link from 'next/link';

const Page = async ({
    searchParams
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) => {
    const selectedCategory = (searchParams.category || 'dogs') as string;
    const selectedBreed = (searchParams.breedId || null) as string;
    const age = (searchParams.age || undefined) as unknown as number;

    const pets = await getPetsFilteredBy({
        categoryId: selectedCategory,
        breedId: selectedBreed,
        age
    });

    const breeds = await getBreedsByCategory(selectedCategory);

    return (
        <MaxWidthWrapper>
            {pets.length === 0 && <p>No pets found</p>}

            <CategoryFilters />

            {pets != null && (
                <div>
                    <h3 className="text-3xl font-bold">Available Pets</h3>
                    <ul>
                        {pets.map((pet) => (
                            <li key={pet.id}>
                                <a href={`/pet/${pet.id}`}>{pet.name}</a>
                            </li>
                        ))}
                    </ul>
                    <h3 className="text-3xl font-bold">Breeds</h3>
                    {breeds?.map((breed) => (
                        <Link
                            href={{
                                pathname: '/category',
                                query: { ...searchParams, breedId: breed.breedId }
                            }}
                            key={breed.breedId}
                        >
                            {breed.breedId}
                        </Link>
                    ))}
                </div>
            )}
        </MaxWidthWrapper>
    );
};

export default Page;
