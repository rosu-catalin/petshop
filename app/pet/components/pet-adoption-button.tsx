'use client';

import { Button } from '@nextui-org/react';
import { useEffect, useState } from 'react';

const PetAdoptionButton = ({ pet }: { pet: Pet }) => {
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setClicked(false);
        }, 1000);

        return () => {
            clearTimeout(timeout);
        };
    }, [clicked]);

    return (
        <Button
            isLoading={clicked}
            onClick={() => setClicked(!clicked)}
            disabled={pet.reserved || false}
            color="primary"
            radius={'sm'}
            className="h-12 w-full sm:w-[400px]"
        >
            {pet.reserved ? 'Not available' : 'Adopt me'}
        </Button>
    );
};

export default PetAdoptionButton;
