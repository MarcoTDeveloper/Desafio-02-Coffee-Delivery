import { TitleText } from "../../../../components/TextTypes";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { ConfirmationSection } from "./ConfirmationSection";
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees() {
    return(
        <SelectedCoffeesContainer>
            <TitleText size="xs" color="subtitle" >
                Cáfes selecionados
            </TitleText>

            <DetailsContainer>
                <CoffeeCartCard />
                <CoffeeCartCard />
                <CoffeeCartCard />

                <ConfirmationSection/>
            </DetailsContainer>
        </SelectedCoffeesContainer>
    )
}