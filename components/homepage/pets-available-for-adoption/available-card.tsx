import Image from 'next/image';
import Link from 'next/link';

const AvailableCard = ({ pet }: { pet: Pet }) => {
    const replaceImageWidthInUrlQuery = (url: string) => {
        return url.replace('width=1080', 'width=400');
    };

    return (
        <Link href={`/pet/${pet.id}`}>
            <div className="relative flex min-h-[320px] flex-col rounded-md p-4">
                <Image
                    src={replaceImageWidthInUrlQuery(pet.image)}
                    alt={`${pet.name} is available for adoption`}
                    className="rounded-md object-cover"
                    fill={true}
                />
                <div className="mt-auto flex w-full items-center justify-between rounded-md bg-white/50 p-4 backdrop-blur-xl">
                    <p className="font-bold text-black">{pet.name}</p>
                    <p>{pet.age} years</p>
                </div>
            </div>
        </Link>
    );
};

export default AvailableCard;
