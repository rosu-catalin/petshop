'use client';

import { Slider } from '@nextui-org/slider';
import { useSearchParams } from 'next/navigation';
import { Checkbox, CheckboxGroup } from '@nextui-org/checkbox';
import useUpdateUrl from '@/app/category/hooks/use-update-url';

/*
    TODO
    - Separate the filters into their own components
 */

const CategoryFilters = ({ breeds }: { breeds: Breed[] }) => {
    const updateUrl = useUpdateUrl();
    const searchParams = useSearchParams();

    const startAge = searchParams.get('startAge') ?? '1';
    const endAge = searchParams.get('endAge') ?? '20';
    const genderParam = searchParams.get('gender') ?? 'male';

    const handleAgeChange = (value: number[]) => {
        const [startAge, endAge] = value;
        updateUrl({ startAge: startAge.toString(), endAge: endAge.toString(), page: '1' });
    };

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
                defaultValue={[parseInt(startAge), parseInt(endAge)]}
                formatOptions={{ style: 'unit', unit: 'year' }}
                getValue={(value) => `${value.toString().replace(',', '-')} years`}
                onChange={(value) => handleAgeChange(value as number[])}
                className="max-w-md"
            />

            <CheckboxGroup
                label="Gender"
                classNames={{ label: 'text-default-700' }}
                defaultValue={genderParam.split(',')}
                onChange={(value) => handleGenderChange(value as string[])}
            >
                <Checkbox value="male">Male</Checkbox>
                <Checkbox value="female">Female</Checkbox>
            </CheckboxGroup>

            <CheckboxGroup
                label="Breeds"
                classNames={{ label: 'text-default-700' }}
                defaultValue={(searchParams.get('breedId') ?? '').split(',')}
                onChange={(value) => handleBreedChange(value as string[])}
            >
                {breeds.map((breed) => (
                    <Checkbox value={breed.breedId} key={breed.breedId}>
                        {breed.breedId}
                    </Checkbox>
                ))}
            </CheckboxGroup>
        </>
    );
};

export default CategoryFilters;
