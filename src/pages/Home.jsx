import HeroSection from "../component/herosection/HeroSection";
import BecomeDonor from "./BecomeDonor";
import FindBlood from "./FindBlood";

export default function Home() {

    return (

        <>

            <div className="pt-0">
                <HeroSection />
            </div>
            <div>
                <BecomeDonor />
            </div>
            <div>
                <FindBlood />
            </div>

        </>

    )

}