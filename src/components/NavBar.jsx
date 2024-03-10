import { CartWidget } from './CartWidget';
export const NavBar = () => (
    <>
        <div className="navbar">E-COMMERCE</div>

        <ul>
            <li>
                <a href="#">Inicio</a>
            </li>
            <li>
                <a href="#">commerce</a>
            </li>
            <li>
                <a href="#">Sobre Mí</a>
            </li>
            <li>
                <a href="#">Contacto</a>
            </li>
        </ul>
        <CartWidget />
    </>
);
