import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button';
import './ProductCard.scss';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;

    return (
        <div className="product-card-container">
            <img 
                src={imageUrl} 
                alt={name} 
            />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType={BUTTON_TYPE_CLASSES.INVERTED}>Add to cart</Button>
        </div>
    );
};

export default ProductCard;
