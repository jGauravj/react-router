import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const Card = ({ data }) => {

  const dispatch = useDispatch();
  const handleAddItem = (data) => {
    dispatch(addItem(data));
  }

  const { img, name, discription, price } = data;
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-wrap gap-x-5 mt-5">
      <div className="product-2 w-64 ">
            <div>
              <img
                className="rounded-xl max-h-40 min-w-64 object-cover"
                src = {img}
                alt=""
              />
            </div>
            <div className="px-3 py-1">
              <h1 className="font-semibold text-xl text-gray-800">{name}</h1>
              <p className="text-sm text-gray-600 truncate">
                {discription}
              </p>
              <div className="flex py-2 gap-x-4">
                <p className="text-base font-semibold text-gray-600 py-1">
                  {price}
                </p>
                <button className="px-3 py-2 bg-red-200 rounded-xl text-gray-700 text-xs font-semibold" onClick={ () => handleAddItem(data)}>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
    </div>
    </div>
    
  );
};

export default Card;
