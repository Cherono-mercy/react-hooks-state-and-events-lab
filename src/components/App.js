import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  //State variable to store the current mode
  const [buttonText, setButtonText] = useState(false);

  let appClass = buttonText ? "App dark" : "App light"; //Using appClass to update the mode
  //Function to update state conditionally and change mode
  function handleModeToggle() {
    if (buttonText === true) {
      setButtonText(false);
    } else {
      setButtonText(true);
    }
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        {/* Button for toggling the dark mode */}
        <button onClick={handleModeToggle} className="button">
          {buttonText ? "Dark Mode" : "Light Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
