'use client';

import Link from 'next/link';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import Image from 'next/image';
import { Chip } from '@nextui-org/chip';
import { firstLetterUppercase } from '@/lib/utils';
import { Button } from '@nextui-org/react';
import { Heart } from 'lucide-react';
import { SignedIn, useAuth } from '@clerk/nextjs';

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#D4D4D8" offset="20%" />
      <stop stop-color="#BABAC4" offset="50%" />
      <stop stop-color="#D4D4D8" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#D4D4D8" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
    typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);

const AnimalCard = async ({ pet }: { pet: Pet }) => {
    const { id, image, name, gender, breedId: breed } = pet;

    const { userId } = useAuth();

    const replaceImageWidthInUrlQuery = (url: string) => {
        return url.replace('width=1080', 'width=400');
    };

    const handleAddToFavorites = async (id: string) => {
        // const API_URL = `https://animals-adoption.up.railway.app/api/favorites/add`;
        const USER_ID = userId;

        try {
            console.log({
                userId: USER_ID,
                animalId: id
            });

            // const res = await fetch(API_URL, {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     mode: 'no-cors',
            //     body: JSON.stringify({
            //         userId: USER_ID,
            //         animalId: id
            //     })
            // });

            console.log('Add to favorites', id, USER_ID);
            // const data = await res.text();

            // console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Card className="p-3">
            <Link href={`/pet/${id}`}>
                <CardHeader className="relative h-[200px] flex-col items-start md:h-[250px]">
                    <Image
                        src={replaceImageWidthInUrlQuery(image)}
                        alt={`${name} is available for adoption`}
                        className="h-full w-full rounded-md object-cover object-center"
                        fill
                        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
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
            <SignedIn>
                <Button
                    className="absolute right-3 z-10"
                    color="default"
                    aria-label="Add to favorites"
                    radius="full"
                    isIconOnly
                    onClick={() => handleAddToFavorites(id)}
                >
                    <Heart size={20} />
                </Button>
            </SignedIn>
        </Card>
    );
};

export default AnimalCard;
