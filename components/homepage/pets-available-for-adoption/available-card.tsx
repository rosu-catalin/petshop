import Image from "next/image";

type CardProps = {
    image: string
    name: string
    age: number
}

const AvailableCard = ({ pet }: {pet: CardProps}) => {
    return (
        <div className='flex flex-col min-h-[320px] relative p-4 rounded-md'>
            <Image src={pet.image} alt={`${pet.name} is available for adoption`} className='object-cover rounded-md' fill={true}/>
            <div className='flex items-center justify-between p-4 rounded-md backdrop-blur-xl bg-white/50 w-full mt-auto'>
                <p className='text-black font-bold'>{pet.name}</p>
                <p>{pet.age} years</p>
            </div>
        </div>
    )
}

export default AvailableCard