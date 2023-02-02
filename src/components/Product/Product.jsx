import ButtonDelete from '../ButtonDelete/ButtonDelete';
import Count from '../Count/Count';
import './style.scss'

const Product = ({ product, deleteProduct, increase, changeValue, decrease }) => {
    const {title, img, count, priceTotal, id} = product

    const priceFormatter = new Intl.NumberFormat()

    return (
    <section className="product">
    <div className="product__img"><img src={`./img/products/${img}`} alt={title}/></div>
    <div className="product__title">{title}</div>
    <div className="product__count">
        <Count count={count} increase={increase} id={id} decrease={decrease} changeValue={changeValue}/>
    </div>
    <div className="product__price">{priceFormatter.format(priceTotal)}</div>
    <div className="product__controls">
        <ButtonDelete deleteProduct={deleteProduct} id={id}/>
    </div>
</section>
);
}
 
export default Product;