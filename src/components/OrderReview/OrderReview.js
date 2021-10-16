import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router";
import { clearTheCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import useCart from "../Hook/useCart";
import useProducts from "../Hook/useProducts";
import ReviewItem from "../ReviewItem/ReviewItem";

const OrderReview = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);
  const history = useHistory();
  const handleRemove = (key) => {
    const newCart = cart.filter((product) => product.key !== key);
    setCart(newCart);
    removeFromDb(key);
  };
  const handlePlaceOrder = () => {
    history.push("/shipping");
    // setCart([])
    // clearTheCart()
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {cart.map((product) => (
          <ReviewItem
            product={product}
            key={product.key}
            handleRemove={handleRemove}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <button onClick={handlePlaceOrder} className="btn-regular">
            <FontAwesomeIcon icon={faShoppingCart} /> Shipping
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default OrderReview;
