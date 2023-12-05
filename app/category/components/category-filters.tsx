'use client';

import { Slider } from '@nextui-org/slider';
import { useSearchParams } from 'next/navigation';
import { Checkbox, CheckboxGroup } from '@nextui-org/checkbox';
import useUpdateUrl from '@/app/category/hooks/use-update-url';
import { useDebouncedCallback } from 'use-debounce';
import { useState } from 'react';

const CategoryFilters = ({ breeds }: { breeds: Breed[] }) => {
    const updateUrl = useUpdateUrl();
    const searchParams = useSearchParams();

    const startAge = searchParams.get('startAge') ?? '1';
    const endAge = searchParams.get('endAge') ?? '20';
    const genderParam = searchParams.get('gender') ?? 'male,female';
    const breedParam = (searchParams.get('breedId') ?? '').split(',');

    const [ages, setAges] = useState<number[]>([parseInt(startAge), parseInt(endAge)]);

    const handleAgeChange = (value: number[]) => {
        const [startAge, endAge] = value;
        updateUrl({ startAge: startAge.toString(), endAge: endAge.toString(), page: '1' });
    };

    const debouncedHandleAgeChange = useDebouncedCallback(handleAgeChange, 250);

    const handleGenderChange = (gender: string[]) => {
        updateUrl({ gender: gender.join(','), page: '1' });
    };

    const handleBreedChange = (breedId: string[]) => {
        updateUrl({ breedId: breedId.join(','), page: '1' });
    };

    return (
        <>
            <Slider
                label="Age Range"
                classNames={{ label: 'text-default-700' }}
                step={1}
                minValue={1}
                maxValue={20}
                value={ages}
                defaultValue={ages}
                formatOptions={{ style: 'unit', unit: 'year' }}
                getValue={(value) => `${value.toString().replace(',', '-')} years`}
                onChange={(value) => {
                    setAges(value as number[]);
                    debouncedHandleAgeChange(value as number[]);
                }}
                className="max-w-md"
            />

            <CheckboxGroup
                label="Gender"
                classNames={{ label: 'text-default-700' }}
                defaultValue={genderParam.split(',')}
                value={genderParam.split(',')}
                onChange={(value) => handleGenderChange(value as string[])}
            >
                <Checkbox value="male">Male</Checkbox>
                <Checkbox value="female">Female</Checkbox>
            </CheckboxGroup>

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
        </>
    );
};

export default CategoryFilters;
