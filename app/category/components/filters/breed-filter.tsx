'use client';

import { Checkbox, CheckboxGroup } from '@nextui-org/checkbox';
import { useSearchParams } from 'next/navigation';
import useUpdateUrl from '@/app/category/hooks/use-update-url';

const BreedFilter = ({ breeds }: { breeds: Breed[] }) => {
    const updateUrl = useUpdateUrl();

    const searchParams = useSearchParams();
    const breedParam = (searchParams.get('breedId') ?? '').split(',');

    const handleBreedChange = (breedId: string[]) => {
        updateUrl({ breedId: breedId.join(','), page: '1' });
    };

    return (
        <CheckboxGroup
            label="Breeds"
            classNames={{ label: 'text-default-700' }}
            defaultValue={breedParam}
            value={breedParam}
            onChange={(value) => handleBreedChange(value as string[])}
        >
            {breeds.map((breed) => (
                <Checkbox value={breed.breedId} key={breed.breedId}>
                    {breed.breedId
                        .toLowerCase()
                        .replace(/\b[a-z]/g, (letter) => letter.toUpperCase())}
                </Checkbox>
            ))}
        </CheckboxGroup>
    );
};

export default BreedFilter;
