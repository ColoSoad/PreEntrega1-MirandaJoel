import { CartWidget } from './CartWidget';
export const NavBar = () => (
    <>
        <div className="logo">
            KLOT<span className="klothes">HES</span>
        </div>
        <div className="navbar"></div>
        <nav>
            <ul className="nav-links">
                <li className="nav-links">
                    <a href="#" className="nav-links link">
                        Inicio
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-links link">
                        E-commerce
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-links link">
                        Sobre Mí
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-links link">
                        Contacto
                    </a>
                </li>
            </ul>
        </nav>
        <CartWidget />
    </>
);
