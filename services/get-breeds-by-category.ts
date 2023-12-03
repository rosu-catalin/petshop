import { PET_CATEGORIES } from '@/config';

export async function getBreedsByCategory(categoryId: string) {
    const availableCategories: string[] = PET_CATEGORIES.map((category) => category.id);

    if (!availableCategories.includes(categoryId)) return;

    console.log('getBreedsByCategory', categoryId);

    const response = await fetch(`${process.env.API_URL}/breeds/${categoryId}`, {
        cache: 'no-store'
    });

    console.log('getBreedsByCategory', `${process.env.API_URL}/breeds/${categoryId}`);

    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }

    const breeds: Breed[] = await response.json();

    return breeds;
}
