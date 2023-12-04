import { Bird, Cat, Dog, Fish, PawPrint, Turtle } from 'lucide-react';

export const PET_CATEGORIES = [
    {
        label: 'Dogs',
        id: 'dogs' as const,
        icon: (
            <Dog size={64} strokeWidth={1.3} color="hsl(var(--color-primary))" aria-hidden={true} />
        ),
        navIcon: (
            <Dog size={32} strokeWidth={1.3} color="hsl(var(--color-primary))" aria-hidden={true} />
        )
    },
    {
        label: 'Cats',
        id: 'cats' as const,
        icon: (
            <Cat size={64} strokeWidth={1.3} color="hsl(var(--color-primary))" aria-hidden={true} />
        ),
        navIcon: (
            <Cat size={32} strokeWidth={1.3} color="hsl(var(--color-primary))" aria-hidden={true} />
        )
    },
    {
        label: 'Birds',
        id: 'birds' as const,
        icon: (
            <Bird
                size={64}
                strokeWidth={1.3}
                color="hsl(var(--color-primary))"
                aria-hidden={true}
            />
        ),
        navIcon: (
            <Bird
                size={32}
                strokeWidth={1.3}
                color="hsl(var(--color-primary))"
                aria-hidden={true}
            />
        )
    },
    {
        label: 'Fishes',
        id: 'fishes' as const,
        icon: (
            <Fish
                size={64}
                strokeWidth={1.3}
                color="hsl(var(--color-primary))"
                aria-hidden={true}
            />
        ),
        navIcon: (
            <Fish
                size={32}
                strokeWidth={1.3}
                color="hsl(var(--color-primary))"
                aria-hidden={true}
            />
        )
    },
    {
        label: 'Reptiles',
        id: 'reptiles' as const,
        icon: (
            <Turtle
                size={64}
                strokeWidth={1.3}
                color="hsl(var(--color-primary))"
                aria-hidden={true}
            />
        ),
        navIcon: (
            <Turtle
                size={32}
                strokeWidth={1.3}
                color="hsl(var(--color-primary))"
                aria-hidden={true}
            />
        )
    },
    {
        label: 'Others',
        id: 'others' as const,
        icon: (
            <PawPrint
                size={64}
                strokeWidth={1.3}
                color="hsl(var(--color-primary))"
                aria-hidden={true}
            />
        ),
        navIcon: (
            <PawPrint
                size={32}
                strokeWidth={1.3}
                color="hsl(var(--color-primary))"
                aria-hidden={true}
            />
        )
    }
];
