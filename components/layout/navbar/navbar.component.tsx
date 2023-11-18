import {
    Navbar,
    NavbarBrand,
    NavbarMenuToggle,
    NavbarMenuItem,
    NavbarMenu,
    NavbarContent,
    NavbarItem,
    Link,
    Button
} from "@nextui-org/react";
import {AcmeLogo} from "@/components/layout/navbar/logo";
import NextLink from 'next/link'
import {usePathname} from "next/navigation";
import {useState} from "react";
import {SignedIn, SignedOut} from "@clerk/nextjs";
import UserAvatar from "@/components/layout/user_avatar/user-avatar.component";
import {HeartIcon} from "@heroicons/react/24/solid";

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const path = usePathname()

    const menuItems = [
        "Reservations",
        "Wishlist"
    ];

    return (
        <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            maxWidth='xl'
            height='5rem'
            isBlurred={true}
        >
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"}/>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="start">
                <NextLink href='/' passHref legacyBehavior>
                    <Link color='foreground'>
                        <NavbarBrand className="gap-2">
                            <AcmeLogo/>
                            <p className="font-bold text-inherit">PetHub</p>
                        </NavbarBrand>
                    </Link>
                </NextLink>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify='center'>
                <NavbarItem isActive={path.startsWith('/category/')}>
                    <NextLink href={'/category/dogs'}>
                        Find Pets
                    </NextLink>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                <SignedIn>
                    <NavbarItem>
                        <NextLink href={'/dashboard'} aria-label='Favorite Animals' title='See your favorite animals'>
                            <HeartIcon className="h-8 w-8 hover:text-red-500 transition-all hover:scale-95"/>
                        </NextLink>
                    </NavbarItem>
                </SignedIn>
                <NavbarItem className="flex">
                    <SignedOut>
                        <NextLink href='/sign-in' passHref legacyBehavior>
                            <Button as={Link} color="warning" variant="flat">
                                Sign In
                            </Button>
                        </NextLink>
                    </SignedOut>
                    <SignedIn>
                        <UserAvatar/>
                    </SignedIn>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
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
