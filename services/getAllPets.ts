export async function getAllPets(): Promise<Pet[]> {

    const res = await fetch(`http://localhost:8080/api/animals}`, {
        next: {
            revalidate: 1000
        }
    })

    if (!res.ok) {
        throw new Error('Error 404')
    }

    return res.json()

}