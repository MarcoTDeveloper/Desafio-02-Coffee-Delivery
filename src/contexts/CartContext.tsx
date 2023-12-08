import { ReactNode, createContext, useEffect, useState } from "react";
import { Coffee } from "../pages/Home/components/CoffeeCard"
import { produce } from "immer";

export interface CartItem extends Coffee {
    quantity: number
}

interface CartContextType{
    cartItems: CartItem[];
    cartQuantity: number;
    constItemsTotal: number;
    addCoffeeToCart: (coffee: CartItem) => void;
    removeCartItem: (cartItemId: number) => void;
    changeCartItemQuantity: (cartItemId: number, type: "increase" | "decrease") => void;
    cleanCart: () => void;
}

interface CartContextProviderProps {
    children: ReactNode;
}

const COFFEE_ITEMS_STORAGE_KEY = "coffee_delivery:cartItems"

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({children}: CartContextProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY)
        if(storedCartItems) {
            return JSON.parse(storedCartItems)
        }
        return [];
    });

    const cartQuantity = cartItems.length;

    const constItemsTotal = cartItems.reduce( (total, cartItem) => {
        return total + cartItem.price * cartItem.quantity
    }, 0)
    
    function addCoffeeToCart(coffee: CartItem) {
        const coffeeAlreadyExistsInCart = cartItems.findIndex(
            (cartItem) => cartItem.id === coffee.id
        )

        const newCart = produce(cartItems, (draft) =>{
            if (coffeeAlreadyExistsInCart < 0) {
                draft.push(coffee)
            } else {
                draft[coffeeAlreadyExistsInCart].quantity =+ coffee.quantity
            }
        })

        setCartItems(newCart)
    }

    function changeCartItemQuantity(cartItemId: number, type: 'increase' | 'decrease') {
        const newCart = produce(cartItems, (draft) => {
            const CoffeeExistsInCart = cartItems.findIndex(cartItem => cartItem.id === cartItemId);

            if(CoffeeExistsInCart >= 0) {
                const item = draft[CoffeeExistsInCart];
                draft[CoffeeExistsInCart].quantity =
                    type === "increase" ? item.quantity + 1 : item.quantity - 1; 
            }
        })

        setCartItems(newCart)
    }
    
    function removeCartItem(cartItemId: number) {
        const newCart = produce(cartItems,(draft) => {
            const CoffeeExistsInCart = cartItems.findIndex(cartItem => cartItem.id === cartItemId);

            if(CoffeeExistsInCart >= 0) {
                draft.splice(CoffeeExistsInCart, 1)
            }
        })

        setCartItems(newCart)
    }

    function cleanCart(){
        setCartItems([])
    }

    useEffect( () => {
        localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems))
    },[cartItems]);

    return (
        <CartContext.Provider value={{
        cartItems,
        addCoffeeToCart,
        cartQuantity,
        changeCartItemQuantity,
        removeCartItem,
        constItemsTotal,
        cleanCart
        }}>
            {children}
        </CartContext.Provider>
    );
}