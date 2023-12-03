import { PET_CATEGORIES } from '@/config';

export async function getBreedsByCategory(categoryId: string) {
    const availableCategories: string[] = PET_CATEGORIES.map((category) => category.id);

    if (!availableCategories.includes(categoryId)) return;

    const response = await fetch(`${process.env.API_URL}/breeds/${categoryId}`, {
        next: {
            revalidate: 60
        }
    });

    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }

    const breeds: Breed[] = await response.json();

    return breeds;
}
