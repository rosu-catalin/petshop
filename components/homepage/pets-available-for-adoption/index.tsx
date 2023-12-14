import { getPetsFilteredBy } from '@/services/get-pets-filtered-by';
import AvailableCard from '@/components/homepage/pets-available-for-adoption/available-card';

const PetsAvailableForAdoption = async () => {
    const pets = await getPetsFilteredBy({
        randomLimit: 4
    });

    return (
        <div>
            <h2 className="text-balance text-2xl font-bold text-gray-800 sm:text-4xl">
                Pets Available for Adoption
            </h2>
            <div className="my-4 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
                {pets.map((pet) => (
                    <AvailableCard key={pet.id} pet={pet} />
                ))}
            </div>
        </div>
    );
};

export default PetsAvailableForAdoption;
