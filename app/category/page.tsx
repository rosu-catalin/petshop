import MaxWidthWrapper from '@/components/max-width-wrapper';
import { getPetsFilteredBy } from '@/services/get-pets-filtered-by';
import AnimalNavigation from '@/app/category/components/animal-navigation';
import { Suspense } from 'react';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import Image from 'next/image';
import CategoryFilters from '@/app/category/components/category-filters';
import { getBreedsByCategory } from '@/services/get-breeds-by-category';
import CategoryPagination from '@/app/category/components/category-pagination';

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
    const per_page = searchParams['per_page'] ?? '9';

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
                <div className="grid items-start gap-3 lg:grid-cols-[350px_1fr]">
                    <div className="rounded-md bg-gray-100 p-4">
                        <h3 className="text-2xl font-bold">Filters</h3>
                        <div className="mt-4 grid gap-4">
                            <CategoryFilters breeds={breeds || []} />
                        </div>
                    </div>
                    <Suspense fallback={<p>Loading...</p>}>
                        <div className={`grid grid-cols-2 gap-2 xl:grid-cols-3`}>
                            {entries.length === 0 && <p>No pets found</p>}
                            {entries.map((pet) => (
                                <Card className="p-1" key={pet.id}>
                                    <CardHeader className="flex-col items-start">
                                        <Image
                                            src={pet.image}
                                            alt={`${pet.name} is available for adoption`}
                                            className="h-[250px] w-full rounded-md object-cover object-center"
                                            width={375}
                                            height={250}
                                        />
                                    </CardHeader>
                                    <CardBody className="overflow-visible py-2">
                                        <div className="flex items-center justify-between">
                                            <p className="font-bold text-black">{pet.name}</p>
                                            <p>{pet.age} years</p>
                                        </div>
                                    </CardBody>
                                </Card>
                            ))}
                        </div>
                    </Suspense>
                </div>
                <CategoryPagination dataLength={pets.length} />
            </MaxWidthWrapper>
        </>
    );
};

export default Page;