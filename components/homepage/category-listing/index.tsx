import {PET_CATEGORIES} from "@/config";
import {Card, CardBody, CardHeader} from "@nextui-org/card";
import Link from 'next/link'

const CategoryListing = () => {
    return (
        <div>
            <div className='grid grid-cols-pet-categories gap-2 -mt-8 max-w-[850px] mx-auto'>
                {PET_CATEGORIES.map(category =>
                    <Link href={`/category/${category.id}`} key={category.id}>
                        <Card className="py-4">
                            <CardHeader className="pb-0 pt-2 px-4 justify-center">
                                {category.icon}
                            </CardHeader>
                            <CardBody className="overflow-visible py-2 text-center">
                                <h4 className="font-bold text-large">{category.label}</h4>
                            </CardBody>
                        </Card>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default CategoryListing