'use client';

import { Select, SelectItem } from '@nextui-org/react';
import { PET_CATEGORIES } from '@/config';
import { useSearchParams } from 'next/navigation';
import useUpdateUrl from '@/app/category/hooks/use-update-url';

const AnimalNavigation = () => {
    const updateUrl = useUpdateUrl();
    const searchParams = useSearchParams();

    const selectedCategory = searchParams.get('category') ?? 'dogs';

    const selectedCategoryIcon = PET_CATEGORIES.find((category) => category.id === selectedCategory)
        ?.navIcon;

    return (
        <div>
            <Select
                label="Favorite Animal"
                placeholder="Select an animal"
                startContent={selectedCategoryIcon}
                defaultSelectedKeys={[selectedCategory]}
                selectedKeys={[selectedCategory]}
                className="max-w-[250px]"
                color="primary"
                onChange={({ target: { value } }) => {
                    updateUrl({ category: value, page: '1' }, true);
                }}
            >
                {PET_CATEGORIES.map((animal) => (
                    <SelectItem key={animal.id} value={animal.label}>
                        {animal.label}
                    </SelectItem>
                ))}
            </Select>
        </div>
    );
};

export default AnimalNavigation;
