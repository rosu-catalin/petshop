import {
    Avatar,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownSection,
    DropdownTrigger
} from '@nextui-org/react';
import { useAuth, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

const UserAvatar = () => {
    const router = useRouter();

    const { user } = useUser();
    const { signOut } = useAuth();

    return (
        <div className="flex items-center gap-4">
            <Dropdown
                showArrow
                radius="sm"
                classNames={{
                    base: 'before:bg-default-200', // change arrow background
                    content: 'p-0 border-small border-divider bg-background'
                }}
            >
                <DropdownTrigger>
                    <Avatar
                        isBordered
                        as="button"
                        className="transition-transform"
                        src={user?.imageUrl}
                        showFallback
                    />
                </DropdownTrigger>
                <DropdownMenu
                    aria-label="Custom item styles"
                    disabledKeys={['profile']}
                    className="p-3"
                    itemClasses={{
                        base: [
                            'rounded-md',
                            'text-default-500',
                            'transition-opacity',
                            'data-[hover=true]:text-foreground',
                            'data-[hover=true]:bg-default-100',
                            'dark:data-[hover=true]:bg-default-50',
                            'data-[selectable=true]:focus:bg-default-50',
                            'data-[pressed=true]:opacity-70',
                            'data-[focus-visible=true]:ring-default-500'
                        ]
                    }}
                >
                    <DropdownSection aria-label="Profile & Actions" showDivider>
                        <DropdownItem isReadOnly key="profile" className="h-14 gap-2 opacity-100">
                            <p className="font-bold">{user?.fullName}</p>
                            <p>{user?.primaryEmailAddress?.emailAddress}</p>
                        </DropdownItem>
                        <DropdownItem key="dashboard">Dashboard</DropdownItem>
                    </DropdownSection>

                    <DropdownSection aria-label="Logout">
                        <DropdownItem key="logout" onClick={() => signOut(() => router.push('/'))}>
                            Log Out
                        </DropdownItem>
                    </DropdownSection>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
};

export default UserAvatar;
