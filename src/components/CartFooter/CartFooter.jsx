import './style.scss'

const CartFooter = ({total}) => {

    const priceFormatter = new Intl.NumberFormat()

    return ( 
        <footer className="cart-footer">
                        <div className="cart-footer__count">{total.count} шт.</div>
                        <div className="cart-footer__price">{priceFormatter.format(total.price)} грн.</div>
                    </footer>
     );
}
 
export default CartFooter;