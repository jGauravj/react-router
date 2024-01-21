import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import Card from "../Product/Card";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="mt-5">
      <div className="flex justify-center gap-x-5">
        <h1 className="text-center text-gray-700 font-semibold text-3xl">
          Cart
        </h1>
        <button
          className="px-3 py-2 bg-black text-white rounded-lg text-xm"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>

      <div className="grid grid-cols-3 mx-[300px]">
        {cartItems.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
