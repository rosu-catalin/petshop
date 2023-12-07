import { twMerge } from 'tailwind-merge';
import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function firstLetterUppercase(input: string) {
    return input.charAt(0).toUpperCase() + input.slice(1);
}
