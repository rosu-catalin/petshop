import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

const MaxWidthWrapper = ({ className, children }: { className?: string; children: ReactNode }) => {
    return <div className={cn('mx-auto w-full max-w-[1536px] px-6', className)}>{children}</div>;
};

export default MaxWidthWrapper;
