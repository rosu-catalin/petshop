import Link from 'next/link';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import Image from 'next/image';
import { Chip } from '@nextui-org/chip';
import { firstLetterUppercase } from '@/lib/utils';
import { auth } from '@clerk/nextjs';
import AddToFavorite from '@/app/category/components/card/add-to-favorite';

type CardProps = {
    pet: Pet;
    favorites: Pet[];
};

const AnimalCard = async ({ pet, favorites }: CardProps) => {
    const { id, image, name, gender, breedId: breed } = pet;

    const replaceImageWidthInUrlQuery = (url: string) => {
        return url.replace('width=1080', 'width=400');
    };

    // Check if the pet is in the favorites array list of objects
    const isFavorite = favorites.some((favorite) => favorite.id === id);

    const { userId } = auth();

    return (
        <Card className="p-3">
            <Link href={`/pet/${id}`}>
                <CardHeader className="relative h-[200px] flex-col items-start md:h-[250px]">
                    <Image
                        src={replaceImageWidthInUrlQuery(image)}
                        alt={`${name} is available for adoption`}
                        className="h-full w-full rounded-md object-cover object-center"
                        fill
                        sizes="(min-width: 1024px) 375px, 100vw"
                    />
                </CardHeader>
                <CardBody className="mt-3 overflow-visible p-0">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-black">{name}</h3>
                        <Chip
                            color={gender === 'male' ? 'primary' : 'danger'}
                            variant="flat"
                            size="md"
                        >
                            {firstLetterUppercase(gender)}
                        </Chip>
                    </div>
                    <p className="text-foreground-600">{firstLetterUppercase(breed)}</p>
                </CardBody>
            </Link>
            <AddToFavorite petId={pet.id} userId={userId} isFavorite={isFavorite} />
        </Card>
    );
};

export default AnimalCard;
