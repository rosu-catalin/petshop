import Hero from "@/components/homepage/hero";
import CategoryListing from "@/components/homepage/category-listing";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import HowItWorks from "@/components/homepage/how-it-works";
import PetsAvailableForAdoption from "@/components/homepage/pets-available-for-adoption";

export default function Home() {

    return (
        <div>
            <Hero/>
            <MaxWidthWrapper>
                <CategoryListing/>
                <HowItWorks/>
                <PetsAvailableForAdoption/>
            </MaxWidthWrapper>
        </div>
    )
}