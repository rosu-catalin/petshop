import MaxWidthWrapper from '@/components/max-width-wrapper';
import AnimalNavigation from '@/app/category/components/animal-navigation';

export default function Page() {
    return (
        <>
            <div className="bg-primary">
                <MaxWidthWrapper className="py-3">
                    <AnimalNavigation />
                </MaxWidthWrapper>
            </div>
            <MaxWidthWrapper className="my-4">
                <div className="grid min-h-[400px] items-start gap-4 rounded-md bg-white shadow-2xl lg:grid-cols-[325px_1fr]">
                    <div className="h-full rounded-md border-r border-gray-100 p-4">
                        <h3 className="text-2xl font-bold">Filters</h3>
                        <div className="mt-4 grid gap-4"></div>
                    </div>
                    <div>
                        <div className="mb-4 flex items-center justify-between p-4">
                            <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">Select</h1>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </>
    );
}
