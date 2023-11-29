import { useState } from "react";

function GroceryItem({ name, id }) {
  const [isChecked, setIsChecked] = useState(false);
  // Pass in an item
  // Will need to handle whether or not the item is checked
  // Render checkbox and item name
  return (
    <div>
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <label
        htmlFor={id}
        style={{ textDecoration: isChecked ? "line-through" : "none" }}
      >
        {name}
      </label>
    </div>
  );
}

export default GroceryItem;
