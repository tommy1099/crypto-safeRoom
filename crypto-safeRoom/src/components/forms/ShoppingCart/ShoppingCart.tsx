import { useState, useEffect, useRef } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs"; // Import the shopping cart icon
import { Link } from "react-router-dom";
import pic from "../../../assets/img/bearandbull.png";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { Button } from "../../ui";
import {
  removeItem,
  decreaseOne,
  addItem,
} from "../../../Store/CartListReducer";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";

import { RootState } from "../../../Store/Store";
import {
  decreaseQuantity,
  increaseQuantity,
  reset,
} from "../../../Store/ShoppingCartBadge";
const ShoppingCart = () => {
  const total = useSelector(
    (state: RootState) => state.wholeQuantity.totalQuantity
  );
  const cartItems = useSelector((state: RootState) => state.cartList.list);

  const dispatch = useDispatch();

  const handlerRemoveItem = (
    id: string,
    title: string,
    img: string,
    quantity: number,
    price: number
  ) => {
    dispatch(removeItem({ id, title, img, quantity, price: price }));
  };
  const handlerDecreaseOneItem = (
    id: string,
    title: string,
    img: string,
    quantity: number,
    price: number
  ) => {
    dispatch(decreaseOne({ id, title, img, quantity: quantity, price: price }));
  };
  const handlerAddOneItem = (
    id: string,
    title: string,
    img: string,
    quantity: number,
    price: number
  ) => {
    dispatch(addItem({ id, title, img, quantity: quantity, price: price }));
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(reset());

    if (cartItems) {
      cartItems.forEach((item) => {
        dispatch(increaseQuantity(item.quantity));
      });
    }
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
  }, [dropdownRef, cartItems, dispatch]);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Shopping cart icon */}
      <button
        className="relative"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <FaShoppingCart className="text-neutral text-[25px] mr-2 mt-[9px] " />
        {/* Display the number of items in the cart */}
        {total > 0 && (
          <span className="absolute bottom-3 left-3">
            <span className="inline-block relative px-2 py-1 text-xs rounded-full text-secondary bg-primary">
              {total}
            </span>
          </span>
        )}
      </button>
      {/* Cart dropdown */}
      {isDropdownOpen && (
        <div className="absolute max-h-[500px] right-[-50px] lg:right-0 mt-4 w-[350px] text-neutral bg-base-100 rounded-md ring-1 ring-black ring-opacity-5 shadow-lg origin-top-right overflow-y-auto">
          <div className="fixed w-[335px] h-[7%] bg-base-100">
            <div className="flex justify-between items-center p-5">
              <p className="text-start">Shopping Cart</p>
              <div className="z-10 bg-base-100">
                <Link to="/checkout">
                  <button className="p-2 rounded text-base-100 bg-primary w-22 hover:bg-orange-300">
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <ul className="flex flex-col mt-[20%] ">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="flex justify-between p-5 border-b-2 border-b-gray-100"
              >
                <img className="w-20" src={pic} alt="Cart" />
                <div className="flex flex-col ml-2 w-[40%] items-start justify-start">
                  <p className="flex justify-start items-center max-w-[70%] truncate">
                    {item.title}
                  </p>
                  <p>${item.price}</p>
                </div>

                <div className="flex items-center">
                  <div
                    className="text-gray-700 active:text-gray-400"
                    onClick={() => {
                      handlerDecreaseOneItem(
                        item.id,
                        item.title,
                        item.img,
                        item.quantity,
                        item.price
                      );
                    }}
                  >
                    <div className="cursor-pointer text-primary hover:text-orange-300 active:text-orange-200">
                      {" "}
                      <BiSolidDownArrow />
                    </div>
                  </div>

                  <p className="flex p-1 text-accent">{item.quantity}x</p>
                  <div
                    className="mr-5 text-gray-700 active:text-gray-400"
                    onClick={() => {
                      handlerAddOneItem(
                        item.id,
                        item.title,
                        item.img,
                        item.quantity,
                        item.price
                      );
                    }}
                  >
                    <div className="cursor-pointer text-primary hover:text-orange-300 active:text-orange-200">
                      {" "}
                      <BiSolidUpArrow />
                    </div>
                  </div>

                  <Button
                    style="text-primary hover:text-orange-300 active:text-orange-200"
                    onClick={() => {
                      dispatch(decreaseQuantity());
                      handlerRemoveItem(
                        item.id,
                        item.title,
                        item.img,
                        item.quantity,
                        item.price
                      );
                    }}
                  >
                    <BsFillTrashFill />
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
// import React, { useState, useEffect, useRef } from "react";
// import { FaShoppingCart } from "react-icons/fa";
// import { BsFillTrashFill } from "react-icons/bs"; // Import the shopping cart icon
// import { Link } from "react-router-dom";
// import pic from "../../../assets/img/bearandbull.png";
// import { useSelector } from "react-redux/es/hooks/useSelector";
// import { useDispatch } from "react-redux";
// import { removeItem } from "../../../Store/CartListReducer";
// import { RootState } from "../../../Store/Store";
// const ShoppingCart = () => {
//   const cartItems = useSelector((state: RootState) => state.cartList.list);
//   const [total, setTotal] = useState(0);
//   cartItems.forEach((item) => {
//     setTotal((prev) => prev + item.quantity);
//   });
//   useEffect(() => {
//     console.log(cartItems);
//   }, [cartItems]);
//   const dispatch = useDispatch();

//   const handlerRemoveItem = (
//     id: string,
//     title: string,
//     img: string,
//     quantity: number
//   ) => {
//     dispatch(removeItem({ id, title, img, quantity }));
//   };

//   const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setIsDropdownOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [dropdownRef]);

//   return (
//     <div className="relative" ref={dropdownRef}>
//       {/* Shopping cart icon */}
//       <button
//         className="relative"
//         onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//       >
//         <FaShoppingCart className="text-white text-[20px] mr-2 mt-[9px]" />
//         {/* Display the number of items in the cart */}
//         <span className="absolute top-[-8px] right-[-5px] px-2 py-1 text-xs text-white bg-red-500 rounded-full">
//           {total}
//         </span>
//       </button>
//       {/* Cart dropdown */}
//       {isDropdownOpen && (
//         <div className="absolute max-h-[500px] right-0 mt-2 w-[300px] bg-white rounded-md ring-1 ring-black ring-opacity-5 shadow-lg origin-top-right overflow-y-auto">
//           <p className="mt-5 ml-5 text-start">Shopping Cart</p>
//           <ul className="mb-20">
//             {cartItems.map((item, index) => (
//               <li
//                 key={index}
//                 className="flex justify-between p-5 mt-5 border-b-2 border-b-gray-100"
//               >
//                 <img className="w-20" src={pic} alt="Cart" />
//                 <p className="mx-4 w-[200px] flex justify-start items-center">
//                   {item.title}
//                 </p>
//                 <div className="flex items-center text-red-500">
//                   <p className="flex mr-3">{item.quantity}x</p>
//                   <button
//                     onClick={() =>
//                       handlerRemoveItem(
//                         item.id,
//                         item.title,
//                         item.img,
//                         item.quantity
//                       )
//                     }
//                   >
//                     <BsFillTrashFill />
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//           <div className="flex z-10 my-5 bg-white">
//             <Link to="/checkout">
//               <button className="p-2 ml-5 text-white bg-gray-800 rounded w-22 hover:bg-gray-600">
//                 Checkout
//               </button>
//             </Link>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShoppingCart;
