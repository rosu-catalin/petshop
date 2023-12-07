import SkeletonAnimalCard from '@/app/category/components/skeleton-animal-card';

const SkeletonAnimalCards = () => {
    return (
        <div className="grid grid-cols-pets gap-4">
            {Array.from({ length: 12 }).map((_, index) => (
                <SkeletonAnimalCard key={index} />
            ))}
        </div>
    );
};

export default SkeletonAnimalCards;
