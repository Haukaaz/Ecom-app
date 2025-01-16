import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../context/CartContext";

function NavBar() {

    const [cart, setCart] = useContext(CartContext)

    return(
        <nav className="flex justify-between text-white items-center bg-blue-500 p-4">
            <h2 className="text-2xl">
                <Link to="/">
                    Alltech
                </Link>
            </h2>
            <ul className="flex gap-4">
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/products">
                        Products
                    </Link>
                </li>
                <li>
                    <Link to="/cart">
                        Cart ({cart.length})
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar