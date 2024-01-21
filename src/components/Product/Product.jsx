import React from "react";
import Card from "./Card";
import CardData from "./CardData";

const Product = () => {

  
  return (
    <div className="grid grid-cols-3 mx-[300px]">
      {CardData.map((data, index) => (
        <Card key={index} data={data} />
      ))}
    </div>
  );
};

export default Product;
