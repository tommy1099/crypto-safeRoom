import { useState, useEffect, useRef } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs"; // Import the shopping cart icon
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { Button } from "../../ui";
import { removeItem } from "../../../Store/CartListReducer";
import { formatNumberToPersian } from "../../../utils/NumberToFarsi/NumberToFarsi";
import dummyIMG from "../../../assets/img/logos/images.png";
import { RootState } from "../../../Store/Store";
import {
  decreaseQuantity,
  increaseQuantity,
  reset,
} from "../../../Store/ShoppingCartBadge";
import EmptyCartPic from "../../../assets/img/empty-cart.png";

const ShoppingCart = () => {
  const dispatch = useDispatch();

  const isFa = useSelector((state: RootState) => state.lang.isFa);

  const total = useSelector(
    (state: RootState) => state.wholeQuantity.totalQuantity
  );
  const cartItems = useSelector((state: RootState) => state.cartList.list);
  const priceAfter = useSelector(
    (state: RootState) => state.cartList.priceAfter
  );
  useEffect(() => {
    console.log("is cartItems empty: ", cartItems.length);
    console.log("cartItems: ", cartItems);
    console.log("priceAfter: ", priceAfter);
  }, []);

  const handlerRemoveItem = (
    id: string,
    title: string,
    link: string,
    img: string,
    quantity: number,
    price: number
  ) => {
    dispatch(removeItem({ id, title, link, img, quantity, price: price }));
  };
  useEffect(() => {
    // console.log("first product id", cartItems[0].id);
  }, []);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(reset());
    // dispatch(resetShippingCart());

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
            <span className="inline-block relative w-4 text-xs bg-orange-400 rounded-full text-secondary">
              {isFa ? formatNumberToPersian(total) : total}
            </span>
          </span>
        )}
      </button>
      {/* Cart dropdown */}
      {isDropdownOpen && (
        <div
          className={`overflow-y-auto absolute mt-5 rounded-md shadow-md text-neutral bg-base-100`}
        >
          <div
            className={`rounded-md w-[335px] bg-base-100 max-h-[500px] ${
              cartItems.length > 0 ? "" : "min-h-[300px]"
            } `}
          >
            <div className="flex justify-between items-center p-5">
              <div className="flex flex-col items-start">
                <p className="text-start text-[12px]">مبلغ قابل پرداخت</p>
                <p dir="rtl" className="text-start text-[14px]">
                  {formatNumberToPersian(priceAfter)} تومان
                </p>
              </div>
              <div className="bg-base-100">
                <Link to="/checkout">
                  <button className="p-2 text-sm rounded-md border border-orange-400 transition-all text-neutral hover:bg-orange-400 hover:text-orange-100">
                    {"سبد خرید"}
                  </button>
                </Link>
              </div>
            </div>
            {cartItems.length > 0 ? (
              <ul dir="rtl" className="flex flex-col">
                {cartItems.map((item, index) => (
                  <li
                    key={index}
                    className={`flex justify-between p-1 bg-gray-100`}
                  >
                    <img src={dummyIMG} alt="" className="w-24 rounded-md" />

                    <div className="flex flex-col justify-start items-start py-4 ml-2 text-sm">
                      <p className="flex justify-start items-center truncate">
                        {item.title}
                      </p>
                      <p>{formatNumberToPersian(item.price)} تومان</p>
                    </div>

                    <div className="flex items-center ml-5">
                      <Button
                        style="text-primary hover:text-orange-400 active:text-orange-200"
                        onClick={() => {
                          dispatch(decreaseQuantity());
                          handlerRemoveItem(
                            item.id,
                            item.title,
                            item.link,
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
            ) : (
              <div className="flex justify-center items-center">
                <img src={EmptyCartPic} className="w-[500px]" alt="EmptyCart" />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// : (

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
//     img: string | undefined,
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
