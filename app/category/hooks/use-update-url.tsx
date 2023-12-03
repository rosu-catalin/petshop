import { useRouter, usePathname } from 'next/navigation';
import { useCallback } from 'react';

const useUpdateUrl = () => {
    const router = useRouter();
    const pathname = usePathname();

    const updateUrl = useCallback(
        (updatedParams: { [key: string]: string }) => {
            const searchParams = new URLSearchParams(window.location.search);
            Object.entries(updatedParams).forEach(([key, value]) => {
                searchParams.set(key, value);
            });
            router.push(`${pathname}?${searchParams.toString()}`, { scroll: false });
        },
        [router, pathname]
    );

    return updateUrl;
};

export default useUpdateUrl;