'use client';

import BreedFilter from '@/app/category/components/filters/breed-filter';
import AgeFilter from '@/app/category/components/filters/age-filter';
import GenderFilter from '@/app/category/components/filters/gender-filter';

const CategoryFilters = ({ breeds }: { breeds: Breed[] }) => {
    return (
        <>
            <AgeFilter />
            <GenderFilter />
            <BreedFilter breeds={breeds} />
        </>
    );
};

export default CategoryFilters;
