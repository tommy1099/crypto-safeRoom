import React, { useState, useEffect, useRef } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs"; // Import the shopping cart icon
import { Link } from "react-router-dom";
import pic from "../../../assets/img/bearandbull.png";
interface CartItem {
  name: string;
}

const ShoppingCart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { name: "bluh bluh bluh bluh bluh " },
    { name: " Pack2 Pack2 Pack2" },
    { name: "pack Pack2" },
    { name: "Pack2" },
  ]);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Shopping cart icon */}
      <button
        className="relative"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <FaShoppingCart className="text-white text-[20px] mr-2 mt-[9px]" />
        {/* Display the number of items in the cart */}
        {cartItems.length > 0 && (
          <span className="absolute top-[-8px] right-[-5px] px-2 py-1 text-xs text-white bg-red-500 rounded-full">
            {cartItems.length}
          </span>
        )}
      </button>
      {/* Cart dropdown */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-[300px] bg-white rounded-md ring-1 ring-black ring-opacity-5 shadow-lg origin-top-right">
          <p className="mt-5 ml-5 text-start">Shopping Cart</p>
          <ul>
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="flex justify-between p-5 mt-5 border-b-2 border-b-gray-100"
              >
                <img className="w-20" src={pic} alt="Cart" />
                <p className="mx-4 w-[200px] flex justify-start items-center">
                  {item.name}
                </p>
                <button
                  onClick={() =>
                    setCartItems(cartItems.filter((_, i) => i !== index))
                  }
                  className="text-red-500"
                >
                  <BsFillTrashFill />
                </button>
              </li>
            ))}
          </ul>
          <div className="flex justify-start my-5 ml-5">
            <Link to="/checkout">
              <button className="p-2 text-white bg-gray-800 rounded w-22 hover:bg-gray-600">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
