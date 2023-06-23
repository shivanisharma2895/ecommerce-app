import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <div className="root-layout">
            <header>
                <nav>
                    <h1>QuickShop</h1>

                    <Link to="/product">ProductList</Link>
                    <Link to="/cart">Cart</Link>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

