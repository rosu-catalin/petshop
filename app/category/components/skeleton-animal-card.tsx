import { Card } from '@nextui-org/card';
import { Skeleton } from '@nextui-org/skeleton';

const SkeletonAnimalCard = () => {
    return (
        <Card className="p-3">
            <Skeleton className="rounded-lg">
                <div className="h-[200px] rounded-lg bg-default-300 md:h-[250px]"></div>
            </Skeleton>
            <div className="mt-3 space-y-3">
                <div className="flex items-center justify-between gap-4">
                    <Skeleton className="w-3/5 rounded-lg">
                        <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                    </Skeleton>
                    <Skeleton className="w-2/5 rounded-lg">
                        <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                    </Skeleton>
                </div>
                <Skeleton className="w-2/5 rounded-lg">
                    <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                </Skeleton>
            </div>
        </Card>
    );
};

export default SkeletonAnimalCard;
