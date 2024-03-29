import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull from '../Assets/star_dull_icon.png'
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
const ProductDisplay = (props) => {
    const { product } = props;
    const {addToCart} = useContext(ShopContext)
    return (
        <div className="productdisply">
            <div className="productdisply-left">
                <div className="productdisply-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisply-img">
                    <img className='productdisply-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisply-right">
                <h1> {product.name} </h1>
                < div className="productdisply-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull} alt="" />
                    <p> (122) </p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-old-price">
                        ${product.old_price}
                    </div>
                    <div className="productdisplay-right-new-price">
                        ${product.new_price}
                    </div>
                </div>
                <div className="productdisplay-right-description">
                    A product description is a form of marketing copy used to describe and explain the benefits of your product. In other words, it provides all the information and details of your product on your ecommerce site. 
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>
                    ADD TO CART
                </button>
                <p className="productdisplay-right-category"> <span>Category:</span>Women, T-Shirt, Crop Top </p>
                <p className="productdisplay-right-category"> <span>Tags:</span> Modern, Latest </p>

            </div>
        </div>
    );
};

export default ProductDisplay;