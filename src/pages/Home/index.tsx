import { Intro } from "./components/Intro";
import { OurCoffees } from "./components/Intro/OurCoffees";
import { HomeContainer } from "./styles";

export function Home() {
    return(
        <HomeContainer>
            <Intro />
            <OurCoffees />
        </HomeContainer>
    )
}