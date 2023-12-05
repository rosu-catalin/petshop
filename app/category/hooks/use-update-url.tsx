import { usePathname, useRouter } from 'next/navigation';
import { useCallback } from 'react';

type UpdateUrlParams = {
    [key: string]: string;
};

const useUpdateUrl = () => {
    const router = useRouter();
    const pathname = usePathname();

    const buildUrl = useCallback(
        (params: UpdateUrlParams) => {
            const searchParams = new URLSearchParams();
            for (const [key, value] of Object.entries(params)) {
                searchParams.set(key, value);
            }
            return `${pathname}?${searchParams.toString()}`;
        },
        [pathname]
    );

    const updateUrl = useCallback(
        (updatedParams: UpdateUrlParams, isCategoryChange = false) => {
            const currentParams = new URLSearchParams(window.location.search);
            let newParams;

            if (isCategoryChange) {
                newParams = { category: updatedParams.category };
            } else {
                newParams = Object.fromEntries(currentParams.entries());
                for (const [key, value] of Object.entries(updatedParams)) {
                    newParams[key] = value;
                }
            }

            const newUrl = buildUrl(newParams);

            router.push(newUrl, { scroll: true });
        },
        [buildUrl, router]
    );

    return updateUrl;
};

export default useUpdateUrl;
