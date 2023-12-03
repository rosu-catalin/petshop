'use client';

import { Slider } from '@nextui-org/slider';
import { useSearchParams } from 'next/navigation';
import { Radio, RadioGroup } from '@nextui-org/radio';
import { Checkbox, CheckboxGroup } from '@nextui-org/checkbox';
import useUpdateUrl from '@/app/category/hooks/use-update-url';

/*
    TODO
    - Separate the filters into their own components
    - Fix the gender filter to accept both genders
 */

const CategoryFilters = ({ breeds }: { breeds: Breed[] }) => {
    const updateUrl = useUpdateUrl();
    const searchParams = useSearchParams();

    const startAge = searchParams.get('startAge') ?? '1';
    const endAge = searchParams.get('endAge') ?? '20';
    const genderParam = searchParams.get('gender') ?? 'male';

    const handleAgeChange = (value: number[]) => {
        const [startAge, endAge] = value;
        updateUrl({ startAge: startAge.toString(), endAge: endAge.toString() });
    };

    const handleGenderChange = (gender: string) => {
        updateUrl({ gender });
    };

    const handleBreedChange = (breedId: string[]) => {
        updateUrl({ breedId: breedId.join(',') });
    };

    return (
        <>
            <Slider
                label="Age Range"
                step={1}
                minValue={1}
                maxValue={20}
                defaultValue={[parseInt(startAge), parseInt(endAge)]}
                formatOptions={{ style: 'unit', unit: 'year' }}
                getValue={(value) => `${value.toString().replace(',', '-')} years`}
                onChange={(value) => handleAgeChange(value as number[])}
                className="max-w-md"
            />
            <RadioGroup
                label="Gender"
                color="primary"
                defaultValue={genderParam}
                onValueChange={handleGenderChange}
            >
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
            </RadioGroup>

            <CheckboxGroup
                label="Breeds"
                defaultValue={[]}
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
