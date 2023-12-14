import SkeletonAnimalCard from '@/app/category/components/skeleton-animal-card';

const SkeletonAnimalCards = () => {
    return (
        <div className="grid grid-cols-2 gap-2 md:grid-cols-pets md:gap-4">
            {Array.from({ length: 12 }).map((_, index) => (
                <SkeletonAnimalCard key={index} />
            ))}
        </div>
    );
};

export default SkeletonAnimalCards;
