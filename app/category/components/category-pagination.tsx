'use client';

import { Pagination } from '@nextui-org/pagination';
import { useSearchParams } from 'next/navigation';
import useUpdateUrl from '@/app/category/hooks/use-update-url';

const CategoryPagination = ({ dataLength }: { dataLength: number }) => {
    console.log('Rendering CategoryPagination');
    // TODO: Fix pagination to show correct number of pages

    const updateUrl = useUpdateUrl();

    const searchParams = useSearchParams();

    const page = searchParams.get('page') ?? '1';
    const per_page = searchParams.get('per_page') ?? '9';

    console.log('page', page);

    return (
        <Pagination
            total={Math.ceil(dataLength / Number(per_page))}
            initialPage={parseInt(page)}
            className="my-4 flex justify-center"
            showControls
            onChange={(pageNumber) => {
                updateUrl({ page: pageNumber.toString(), per_page });
            }}
        />
    );
};

export default CategoryPagination;
