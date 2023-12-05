'use client';

import { Select, SelectItem } from '@nextui-org/react';

export default function SortBy() {
    const sortOptions = [
        {
            label: 'Newest',
            value: 'newest'
        },
        {
            label: 'Oldest',
            value: 'oldest'
        }
    ];

    return (
        <Select
            label="Sort by"
            placeholder="Sort by"
            defaultSelectedKeys={['newest']}
            className="w-[150px] md:w-[200px]"
            color="secondary"
        >
            {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                    {option.label}
                </SelectItem>
            ))}
        </Select>
    );
}
