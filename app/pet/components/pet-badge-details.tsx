import { Chip } from '@nextui-org/chip';
import { firstLetterUppercase } from '@/lib/utils';

const PetBadgeDetails = ({ pet }: { pet: Pet }) => {
    return (
        <div className="mt-4 flex gap-4">
            <Chip radius="md">{pet.weight}kg</Chip>
            <Chip radius="md">{firstLetterUppercase(pet.gender)}</Chip>
            <Chip radius="md">{firstLetterUppercase(pet.breedId)}</Chip>
            <Chip radius="md">{firstLetterUppercase(pet.location)}</Chip>
        </div>
    );
};

export default PetBadgeDetails;
