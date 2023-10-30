import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  {
    /* Creating state variable to keep track of the selected value from the select element */
  }
  const [selectedCategory, setSelectedCategory] = useState("All");

  //Function to handle click event on select element
  function handleFilter(event) {
    setSelectedCategory(event.target.value);
  }

  // Using filter method to determine the items to display in the shopping list
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return item.category === selectedCategory;
    }
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {/*{items.map((item) => ( */}
        {itemsToDisplay.map(
          (
            item //Updating li elements using selected category instaed of all items
          ) => (
            <Item key={item.id} name={item.name} category={item.category} />
          )
        )}
      </ul>
    </div>
  );
}

export default ShoppingList;
