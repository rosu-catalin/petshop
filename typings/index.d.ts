// eslint-disable-next-line no-unused-vars
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
};

// eslint-disable-next-line no-unused-vars
type Filters = {
    categoryId?: string;
    gender?: string;
    age?: number;
    startAge?: number;
    endAge?: number;
    breedId?: string;
    limit?: number;
    randomLimit?: number;
};

// eslint-disable-next-line no-unused-vars
type Breed = {
    breedId: string;
};

// eslint-disable-next-line no-unused-vars
type Categories = 'dogs' | 'cats' | 'birds' | 'others';
