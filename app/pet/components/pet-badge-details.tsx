import { Chip } from '@nextui-org/chip';

const PetBadgeDetails = ({ pet }: { pet: Pet }) => {
    return (
        <div className="mt-4 flex gap-4">
            <Chip radius="md">{pet.weight}kg</Chip>
            <Chip radius="md">{pet.gender}</Chip>
            <Chip radius="md">{pet.breedId}</Chip>
            <Chip radius="md">{pet.location}</Chip>
        </div>
    );
};

export default PetBadgeDetails;
