import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseCart,
  removeFromCart,
  getTotals,
} from "../../../redux/cartSlice";

const CartItems = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <div>
      <div className="cart-items">
        {cart.cartItems &&
          cart.cartItems.map((cartItem) => (
            <div className="cart-item" key={cartItem.productId}>
              <div className="cart-product">
                <img src={cartItem.image} alt={cartItem.title} />
                <div>
                  <h3>{cartItem.title}</h3>
                  <button onClick={() => handleRemoveFromCart(cartItem)}>
                    Remove
                  </button>
                </div>
              </div>
              <div className="cart-product-price">${cartItem.price}</div>
              <div className="cart-product-quantity">
                <button onClick={() => handleDecreaseCart(cartItem)}>-</button>
                <div className="count">{cartItem.cartQuantity}</div>
                <button onClick={() => handleAddToCart(cartItem)}>+</button>
              </div>
              <div className="cart-product-total-price">
                ${(cartItem.price * cartItem.cartQuantity).toFixed(2)}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CartItems;
