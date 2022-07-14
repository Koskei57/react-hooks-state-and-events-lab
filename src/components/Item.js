import React,{useState} from "react";

function Item({ name, category }) {
  const [isInTheCart, setInCart] = useState(false);
  
  function HandleClick() {
    setInCart((isInTheCart) => !isInTheCart);
  }
  
  
  return (
    <li className= {isInTheCart? "in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isInTheCart ? "Remove" : "add"} onClick={HandleClick}>{isInTheCart ? "Remove from" : "Add to"} Cart</button>
    </li>
  );
}

export default Item;
