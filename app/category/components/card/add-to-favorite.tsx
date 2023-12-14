'use client';

import { Button } from '@nextui-org/react';
import { Heart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type Props = {
    petId: string;
    userId: string | undefined | null;
    isFavorite: boolean;
};

const AddToFavorite = ({ petId, userId, isFavorite }: Props) => {
    const [loading, setLoading] = useState(false);
    const [isFavoriteState, setIsFavorite] = useState(isFavorite);
    const router = useRouter();

    const handleAddToFavorite = async () => {
        setLoading(true);

        await fetch(`https://animals-adoption.up.railway.app/api/favorites/add`, {
            method: 'POST',
            body: JSON.stringify({
                animalId: petId,
                userId
            })
        });

        router.refresh();
        setIsFavorite(true);
        setLoading(false);
    };

    const handleRemoveFromFavorite = async () => {
        setLoading(true);
        await fetch(`https://animals-adoption.up.railway.app/api/favorites/delete`, {
            method: 'DELETE',
            body: JSON.stringify({
                animalId: petId,
                userId
            })
        });

        router.refresh();
        setIsFavorite(false);
        setLoading(false);
    };

    return (
        <Button
            className="absolute right-3 z-10"
            color={isFavoriteState ? 'danger' : 'default'}
            aria-label="Add to favorites"
            radius="full"
            onClick={isFavorite ? handleRemoveFromFavorite : handleAddToFavorite}
            isIconOnly
            isLoading={loading}
        >
            <Heart size={20} />
        </Button>
    );
};

export default AddToFavorite;
