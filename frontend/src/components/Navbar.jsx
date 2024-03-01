import { React } from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav className="nav-format">
            <ul className="ul-format">
                <li><Link to={'/nosotros'} >Nosotros</Link></li>
                <li><Link to={'/LoadInvtry'}>Agregar ítem</Link></li>
                <li><Link to={"/AllProducts"}>Stock</Link></li>
                <li><Link to={"/Login"}>Acceso Usuarios</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;