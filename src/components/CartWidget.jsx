import imgCarrito from '../assets/img/cartshop.png';
export const CartWidget = () => {
    return (
        <>
            <a href="#">
                <div className="cart numeroHardcodeado">
                    <img src={imgCarrito} alt="Imagen Ecommerce" className="cart" />
                    <span className="numeroHardcodeado">0</span>
                </div>
            </a>
        </>
    );
};
