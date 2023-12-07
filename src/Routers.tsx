import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ShoppingCart } from "./pages/Home/ShoppingCart";
import { DefaultLayout } from "./layout/DefaultLayout";

export function Routers() {
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<Home />}/>
                <Route path="/shopping-cart" element={<ShoppingCart />}/>
            </Route>
        </Routes>
    )
} 