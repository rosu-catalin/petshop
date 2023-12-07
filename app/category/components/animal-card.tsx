import Link from 'next/link';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import Image from 'next/image';

const AnimalCard = ({ pet }: { pet: Pet }) => {
    return (
        <Link href={`/pet/${pet.id}`}>
            <Card className="p-1">
                <CardHeader className="flex-col items-start">
                    <Image
                        src={pet.image}
                        alt={`${pet.name} is available for adoption`}
                        className="h-[200px] w-full rounded-md object-cover object-center md:h-[250px]"
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
        </Link>
    );
};

export default AnimalCard;
