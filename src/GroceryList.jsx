import GROCERY_LIST from "./data";
import GroceryItem from "./GroceryItem";

function GroceryList() {
  // Loop through the array
  // For each item in the array, render GroceryItem
  return (
    <>
      {GROCERY_LIST.map((item) => (
        <GroceryItem key={item.id} name={item.name} id={item.id} />
      ))}
    </>
  );
}

export default GroceryList;
