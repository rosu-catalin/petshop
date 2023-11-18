async function getPetsByCategoryId(slug: string): Promise<Pet[]> {

    const res = await fetch(`http://localhost:8080/api/animals?categoryId=${slug}`, {
        next: {
            revalidate: 1000
        }
    })

    if (!res.ok) {
        throw new Error('Category not found!')
    }

    return res.json()

}

export default getPetsByCategoryId