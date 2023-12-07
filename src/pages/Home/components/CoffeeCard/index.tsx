import { ShoppingCart } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText, TitleText } from "../../../../components/TextTypes";
import { AddCartWrapper, CardFooter, CoffeeCardContainer, Description, Name, Types } from "./styles";
import { FormatMoney } from "../../../../utils/Money";

export interface Coffee {
    id: number;
    tags: string[];
    name: string;
    description: string;
    photo: string;
    price: number;
}

interface CoffeeProps {
    coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeProps) {

    const formattedPrice = FormatMoney(coffee.price)

    return (
        <CoffeeCardContainer>
            <img src={`public/coffees/${coffee.photo}`} />

            <Types>
                {coffee.tags.map(tag => (
                    <span key={`${coffee.id}${tag}`}>{tag}</span>
                ))}
            </Types>

            <Name>{coffee.name}</Name>

            <Description>{coffee.description}</Description>

            <CardFooter>
                <div>
                    <RegularText size="s">R$</RegularText>
                    <TitleText size="m" color="text" as="strong">
                        {formattedPrice}
                    </TitleText>
                </div>

                <AddCartWrapper>
                    <QuantityInput />
                    <button>
                        <ShoppingCart weight="fill" size={22}/>
                    </button>
                </AddCartWrapper>

            </CardFooter>
        </CoffeeCardContainer>
    )
}