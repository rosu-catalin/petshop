'use client';

import { Slider } from '@nextui-org/slider';
import useUpdateUrl from '@/app/category/hooks/use-update-url';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

const AgeFilter = () => {
    const updateUrl = useUpdateUrl();
    const searchParams = useSearchParams();

    const startAge = searchParams.get('startAge') ?? '1';
    const endAge = searchParams.get('endAge') ?? '20';

    const [ages, setAges] = useState<number[]>([parseInt(startAge), parseInt(endAge)]);

    const handleAgeChange = (value: number[]) => {
        const [startAge, endAge] = value;
        updateUrl({ startAge: startAge.toString(), endAge: endAge.toString(), page: '1' });
    };

    const debouncedHandleAgeChange = useDebouncedCallback(handleAgeChange, 250);

    return (
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
    );
};

export default AgeFilter;
