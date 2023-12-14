import { UserProfile } from '@clerk/nextjs';
import MaxWidthWrapper from '@/components/max-width-wrapper';

const UserProfilePage = () => {
    return (
        <MaxWidthWrapper className="my-4">
            <UserProfile path="/user-profile" routing="path" />
        </MaxWidthWrapper>
    );
};

export default UserProfilePage;
