'use client';

import { Pagination } from '@nextui-org/pagination';
import { FC } from 'react';
import { useSearchParams } from 'next/navigation';
import useUpdateUrl from '@/app/category/hooks/use-update-url';

interface PaginationControlsProps {
    hasNextPage: boolean;
    hasPrevPage: boolean;
}

const CategoryPagination: FC<PaginationControlsProps> = ({ hasNextPage, hasPrevPage }) => {
    // TODO: Fix pagination to show correct number of pages

    const updateUrl = useUpdateUrl();

    const searchParams = useSearchParams();

    const page = searchParams.get('page') ?? '1';
    const per_page = searchParams.get('per_page') ?? '9';

    return (
        <Pagination
            total={Math.ceil(10 / Number(per_page))}
            initialPage={parseInt(page)}
            className="my-4 flex justify-center"
            isCompact
            showControls
            onChange={(pageNumber) => {
                updateUrl({ page: pageNumber.toString() });
            }}
        />
    );
};

export default CategoryPagination;
