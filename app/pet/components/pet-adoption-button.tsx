'use client';

import { Button } from '@nextui-org/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

type Props = {
    pet: Pet;
    userId: string | undefined | null;
};

const PetAdoptionButton = ({ pet, userId }: Props) => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleAdoption = async () => {
        setLoading(true);

        await fetch(`https://animals-adoption.up.railway.app/api/reserve/${userId}/${pet.id}`, {
            method: 'PUT'
        });

        router.refresh();
        setLoading(false);
    };

    return (
        <Button
            disabled={pet.reserved || false}
            color={pet.reserved ? 'danger' : 'primary'}
            radius={'sm'}
            className="h-12 w-full sm:w-[400px]"
            onClick={handleAdoption}
            isLoading={loading}
        >
            {pet.reserved ? 'Reserved' : 'Adopt me'}
        </Button>
    );
};

export default PetAdoptionButton;
