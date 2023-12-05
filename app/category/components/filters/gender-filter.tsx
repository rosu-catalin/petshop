'use client';

import { Checkbox, CheckboxGroup } from '@nextui-org/checkbox';
import useUpdateUrl from '@/app/category/hooks/use-update-url';
import { useSearchParams } from 'next/navigation';

const GenderFilter = () => {
    const updateUrl = useUpdateUrl();
    const searchParams = useSearchParams();
    const genderParam = searchParams.get('gender') ?? 'male,female';

    const handleGenderChange = (gender: string[]) => {
        const newGenderParam = gender.map(encodeURIComponent).join(',');
        updateUrl({
            gender: newGenderParam
        });
    };

    return (
        <CheckboxGroup
            label="Gender"
            classNames={{ label: 'text-default-700' }}
            value={genderParam.split(',')}
            defaultValue={genderParam.split(',')}
            onChange={(value) => handleGenderChange(value as string[])}
        >
            <Checkbox value="male">Male</Checkbox>
            <Checkbox value="female">Female</Checkbox>
        </CheckboxGroup>
    );
};

export default GenderFilter;
