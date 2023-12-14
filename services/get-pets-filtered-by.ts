export async function getPetsFilteredBy(filters: Filters = {}) {
    const url = new URL(`${process.env.API_URL}/animals?reserved=false`);

    for (const [key, value] of Object.entries(filters)) {
        if (value !== undefined && value !== null && key !== 'limit' && key !== 'randomLimit') {
            url.searchParams.append(key, String(value));
        }
    }

    const response = await fetch(url, {
        next: {
            revalidate: 0
        }
    });

    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }

    const pets: Pet[] = await response.json();

    if (filters.limit) {
        return pets.slice(0, filters.limit);
    }

    if (filters.randomLimit) {
        const shuffled = pets.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, filters.randomLimit);
    }

    return pets;
}
