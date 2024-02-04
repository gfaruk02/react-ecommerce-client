import { useContext } from 'react';
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext';
import cart_cross_icon from '../Assets/cart_cross_icon.png'
const CartItems = () => {
    const {all_product, cartItems, removeFromCart} = useContext(ShopContext);
    // console.log(all_product);
    console.log(cartItems);
    return (
        <div className="cartitems">
            <div className="cartitems-format-main"> 
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
            </div>
            <hr />
            {
                all_product?.map((e)=>{
                    if(cartItems[e.id]>0){
                        return <> 
                        <div className="cartitems-format cartitems-format-main"> 
                        <img src={e.image} alt="" className='carticon-product-icon' />
                        <p>{e.name}</p>
                        <p>${e.new_price}</p>
                        <button className='cartitem-quantity'> {cartItems[e.id]} </button>
                        <p>${e.new_price*cartItems[e.id]} </p>
                        <img className='cartitem-remove-icon' src={cart_cross_icon} alt="" onClick={()=>{removeFromCart(e.id)}}/>
                       
                    </div>
                        </>
                    }
                })
            }
        </div>
    );
};

export default CartItems;