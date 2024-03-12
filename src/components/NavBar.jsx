import { CartWidget } from './CartWidget';
export const NavBar = () => (
    <>
        <div className="navbar">
            <div className="logo">
                KLOT<span className="brand">HES</span>
            </div>
            <ul className="nav-links">
                <li className="nav-links">
                    <a href="#" className="nav-links link1">
                        Inicio
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-links link2">
                        E-commerce
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-links link3">
                        Sobre Mí
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-links link4">
                        Contacto
                    </a>
                </li>
            </ul>
            <CartWidget />
        </div>
    </>
);
