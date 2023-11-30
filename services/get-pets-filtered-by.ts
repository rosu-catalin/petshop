export async function getPetsFilteredBy(filters: Filters = {}) {
    const url = new URL(`${process.env.API_URL}/animals`);

    // console.log(filters);

    for (const [key, value] of Object.entries(filters)) {
        if (value !== undefined && value !== null && key !== 'limit') {
            url.searchParams.append(key, String(value));
        }
    }

    // console.log(url.href);

    const response = await fetch(url, {
        next: {
            revalidate: 60
        }
    });

    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }

    const pets: Pet[] = await response.json();

    if (filters.limit) {
        const shuffled = pets.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, filters.limit);
    }

    return pets;
}
