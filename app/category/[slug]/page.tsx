import getPetsByCategoryId from "@/app/category/[slug]/lib/getPetsByCategoryId";
import { redirect } from 'next/navigation'

async function Page({ params }: { params: { slug: string } }) {

    const { slug } = params

    const availableCategories = ['dogs', 'cats', 'birds', 'reptiles', 'others']

    if (!availableCategories.includes(slug)) {
        redirect('/category/dogs')
    }

    const pets = await getPetsByCategoryId(params.slug);

    return (
        <div>
            {slug}
            {pets.length === 0 && <p>No pets found</p>}

            {pets != null && (
                <div>
                    <h2>Available Pets</h2>
                    <ul>
                        {pets.map((pet) => (
                            <li key={pet.id}>
                                <a href={`/pet/${pet.id}`}>{pet.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

        </div>
    )
}

export default Page