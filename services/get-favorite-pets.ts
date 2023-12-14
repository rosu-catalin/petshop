async function getFavoritesPets(userId: string | null) {
    if (!userId) {
        return new Set();
    }

    const res = await fetch(`${process.env.API_URL}/favorites?userId=${userId}`);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const favorites = await res.json();
    return favorites;
}

export default getFavoritesPets;
