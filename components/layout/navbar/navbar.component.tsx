import {
    Button,
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle
} from '@nextui-org/react';
import { AcmeLogo } from '@/components/layout/navbar/logo';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { SignedIn, SignedOut } from '@clerk/nextjs';
import UserAvatar from '@/components/homepage/hero/user-avatar';
import { HeartIcon } from '@heroicons/react/24/solid';

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const path = usePathname();

    const menuItems = ['Reservations', 'Wishlist'];

    return (
        <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            maxWidth="xl"
            height="5rem"
            isBlurred={true}
        >
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} />
            </NavbarContent>

            <NavbarContent className="hidden gap-4 sm:flex" justify="start">
                <Link color="foreground" href="/">
                    <NavbarBrand className="gap-2">
                        <AcmeLogo />
                        <p className="font-bold text-inherit">PetHub</p>
                    </NavbarBrand>
                </Link>
            </NavbarContent>

            <NavbarContent className="hidden gap-4 sm:flex" justify="center">
                <NavbarItem>
                    <Link
                        href="/category?category=dogs"
                        color="foreground"
                        className={path.startsWith('/category') ? 'font-bold' : 'font-normal'}
                    >
                        Find Pets
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                <SignedIn>
                    <NavbarItem>
                        <Link
                            href="/dashboard"
                            aria-label="Favorite Animals"
                            title="See your favorite animals"
                        >
                            <HeartIcon className="h-8 w-8 transition-all hover:scale-95 hover:text-red-500" />
                        </Link>
                    </NavbarItem>
                </SignedIn>
                <NavbarItem className="flex">
                    <SignedOut>
                        <Button as={Link} href="/sign-in" color="primary" variant="solid">
                            Sign In
                        </Button>
                    </SignedOut>
                    <SignedIn>
                        <UserAvatar />
                    </SignedIn>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === 2
                                    ? 'warning'
                                    : index === menuItems.length - 1
                                      ? 'danger'
                                      : 'foreground'
                            }
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
