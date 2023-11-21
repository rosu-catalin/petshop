import AvailableCard from "@/components/homepage/pets-available-for-adoption/AvailableCard";

const PetsAvailableForAdoption = () => {
    return (
        <div>
            <h2 className='text-2xl sm:text-4xl font-bold text-gray-800 text-balance'>
                Pets Available for Adoption
            </h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-4'>
                <AvailableCard pet={{
                    name: 'Rex',
                    image: 'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D',
                    age: 1
                }}/>
                <AvailableCard pet={{
                    name: 'Rex',
                    image: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?q=80&w=2568&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    age: 1
                }}/>
                <AvailableCard pet={{
                    name: 'Rex',
                    image: 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    age: 1
                }}/>
                <AvailableCard pet={{
                    name: 'Rex',
                    image: 'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D',
                    age: 1
                }}/>
            </div>
        </div>
    )
}

export default PetsAvailableForAdoption