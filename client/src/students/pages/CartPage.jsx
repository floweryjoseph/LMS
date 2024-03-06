import { Close } from "@mui/icons-material";
import CartItem from "../components/CartItem";
import { useCartContext } from '../../context/cart_context';

const CartPage = () => {
  const {
    cart: cartItems,
    total_items,
    total_amount,
    clearCart,
  } = useCartContext();

  // If the cart is empty, display a message
  if (cartItems.length < 1) {
    return (
      <div className="w-full flex justify-center items-center m-20">
        <h2 className="text-2xl">No items found in the cart.</h2>
      </div>
    );
  }

  return (
    <div className="w-full p-10 flex gap-6 bg-gray-100 mt-[50px]">
      {/* Left section - Cart items list */}
      <div className="w-[60%] flex flex-col gap-4">
        <h2 className="text-yellow-600 text-3xl font-bold">Shopping Cart</h2>
        <div className="flex justify-between items-center ">
          <span className="font-semibold">{total_items} Course{total_items !== 1 ? 's' : ''} in Cart</span>
          <button
            type="button"
            className="text-red-600"
            onClick={() => clearCart()}
          >
            <Close className="text-red-600" />
            <span>Clear All</span>
          </button>
        </div>
        {/* Display each cart item */}
        <div className="">
          {cartItems.map(cartItem => (
            <CartItem key={cartItem.courseID} cartItem={cartItem} />
          ))}
        </div>
      </div>

      {/* Right section - Cart summary */}
      <div className="w-[30%] flex flex-col justify-center items-center">
        <span className="text-xl font-semibold">Total:</span>
        <div className="text-xl font-bold">${total_amount.toFixed(2)}</div>
        <button type="button" className="p-2 w-[20%] rounded-md bg-primary text-white mt-4">Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
