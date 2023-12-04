import { PET_CATEGORIES } from '@/config';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import Link from 'next/link';

const CategoryListing = () => {
    return (
        <div>
            <div className="mx-auto -mt-8 grid max-w-[850px] grid-cols-pet-categories gap-2">
                {PET_CATEGORIES.map((category) => {
                    if (category.id !== 'reptiles' && category.id !== 'fishes') {
                        return (
                            <Link href={`/category?category=${category.id}`} key={category.id}>
                                <Card className="py-4">
                                    <CardHeader className="justify-center px-4 pb-0 pt-2">
                                        {category.icon}
                                    </CardHeader>
                                    <CardBody className="overflow-visible py-2 text-center">
                                        <h4 className="text-large font-bold">{category.label}</h4>
                                    </CardBody>
                                </Card>
                            </Link>
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default CategoryListing;
