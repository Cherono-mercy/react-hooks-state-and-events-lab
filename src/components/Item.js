import React, { useState } from "react";

function Item({ name, category }) {
  const [addCart, setAddCart] = useState(true); //Adding state to the component
  let liClass = addCart ? "" : "in-cart"; //Variable to update li className
  let addClass = addCart ? "add" : "remove"; //Variable to update button className
  //Function to handle button click event, update button text on adding item to cart by updating the state
  function addToCart() {
    if (addCart === true) {
      setAddCart(false);
     
    } else {
      setAddCart(true);
      
    }
  }
  return (
    //<li className="">
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      {/*Adding event listener to the add to cart button */}
      <button className={addClass} onClick={addToCart}>
        {addCart ? "Add to Cart" : "Remoe from Cart"}
      </button>
    </li>
  );
}

export default Item;
