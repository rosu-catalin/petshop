import MaxWidthWrapper from '@/components/max-width-wrapper';
import { getPetsFilteredBy } from '@/services/get-pets-filtered-by';
import AnimalNavigation from '@/app/category/components/animal-navigation';
import CategoryFilters from '@/app/category/components/category-filters';
import { getBreedsByCategory } from '@/services/get-breeds-by-category';
import CategoryPagination from '@/app/category/components/category-pagination';
import AnimalCards from '@/app/category/components/card';

const Page = async ({
    searchParams
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) => {
    const selectedCategory = (searchParams.category || 'dogs') as string;
    const selectedBreed = (searchParams.breedId || null) as string;
    const age = (searchParams.age || undefined) as unknown as number;
    const startAge = (searchParams.startAge || undefined) as unknown as number;
    const endAge = (searchParams.endAge || undefined) as unknown as number;
    const gender = (searchParams.gender || undefined) as unknown as string;

    const page = searchParams['page'] ?? '1';
    const per_page = searchParams['per_page'] ?? '12';

    const start = (Number(page) - 1) * Number(per_page);
    const end = start + Number(per_page);

    const pets = await getPetsFilteredBy({
        categoryId: selectedCategory,
        breedId: selectedBreed,
        gender,
        age,
        startAge,
        endAge
    });

    const entries = pets.slice(start, end);

    const breeds = await getBreedsByCategory(selectedCategory);

    return (
        <>
            <div className="bg-primary">
                <MaxWidthWrapper className="py-3">
                    <AnimalNavigation />
                </MaxWidthWrapper>
            </div>
            <MaxWidthWrapper className="my-4">
                <div className="grid items-start gap-4 lg:grid-cols-[325px_1fr]">
                    <div className="rounded-md bg-gray-100 p-4 lg:sticky lg:top-2">
                        <h3 className="text-2xl font-bold">Filters</h3>
                        <div className="mt-4 grid gap-4">
                            <CategoryFilters breeds={breeds || []} />
                        </div>
                    </div>
                    <div>
                        <div className="mb-4 flex items-center justify-between">
                            <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
                                {selectedCategory.charAt(0).toUpperCase() +
                                    selectedCategory.slice(1)}{' '}
                                ({pets.length} available)
                            </h1>
                        </div>
                        <AnimalCards entries={entries} />
                    </div>
                </div>
                <CategoryPagination dataLength={pets.length} />
            </MaxWidthWrapper>
        </>
    );
};

export default Page;
