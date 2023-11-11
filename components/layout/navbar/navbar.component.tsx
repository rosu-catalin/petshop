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
import {UserButton, useUser} from "@clerk/nextjs";

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const path = usePathname()

    const {user, isLoaded} = useUser()

    const menuItems = [
        "Reservations",
        "Wishlist"
    ];

    return (
        <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            maxWidth='2xl'
            isBlurred={true}
        >
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"}/>
            </NavbarContent>

            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NextLink href='/' passHref legacyBehavior>
                    <Link>
                        <NavbarBrand className="gap-2">
                            <AcmeLogo/>
                            <p className="font-bold text-inherit">PetHub</p>
                        </NavbarBrand>
                    </Link>
                </NextLink>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NextLink href='/' passHref legacyBehavior>
                    <Link>
                        <NavbarBrand className="gap-2">
                            <AcmeLogo/>
                            <p className="font-bold text-inherit">PetHub</p>
                        </NavbarBrand>
                    </Link>
                </NextLink>
                <NavbarItem isActive={path === '/' ? true : false}>
                    <NextLink href={'/'}>
                        Home
                    </NextLink>
                </NavbarItem>
                <NavbarItem isActive={path === '/dashboard' ? true : false}>
                    <NextLink href={'/dashboard'}>
                        Dashboard
                    </NextLink>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem className="flex">
                    {isLoaded && user ?
                        <UserButton afterSignOutUrl="/"/>
                        :
                        <NextLink href='/login' passHref legacyBehavior>
                            <Button as={Link} color="warning" variant="flat">
                                Sign In
                            </Button>
                        </NextLink>
                    }
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
