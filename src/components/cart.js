import { NavLink , Outlet } from "react-router-dom";
export default function Cart() {
    return (
        <div>
        <nav>
            <NavLink to="cart">Cart</NavLink>
        </nav>
        <Outlet/>
        </div>
    );
}