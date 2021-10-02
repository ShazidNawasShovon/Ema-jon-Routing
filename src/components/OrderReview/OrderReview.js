import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useCart from '../Hook/useCart';
import useProducts from '../Hook/useProducts';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const[products]=useProducts()
    const [cart,setCart]=useCart(products)
    const handleRemove=(key)=>{
        const newCart=cart.filter(product=>product.key!==key)
        setCart(newCart)
        removeFromDb(key)
    }
    return (
            <div className="shop-container">
                <div className="product-container">
                    {
                        cart.map(product=><ReviewItem
                        product={product}
                        key={product.key}
                        handleRemove={handleRemove}
                        ></ReviewItem>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}
                    
                    ></Cart>
                    
                </div>
            </div>
    );
};

export default OrderReview;