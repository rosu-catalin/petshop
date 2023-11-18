type Pet = {
    id: string;
    categoryId: string;
    breedId: string;
    name: string;
    image: string;
    age: number;
    weight: number;
    gender: 'male' | 'female';
    adopted: boolean;
    reserved: boolean | null;
    userId: string | null;
    description: string;
    location: string;
}