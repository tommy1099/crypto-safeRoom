import { orders, userState } from "../../../Interfaces/Interfaces";
import { BsFillTrashFill } from "react-icons/bs"; // Import the shopping cart icon
import { FaBan } from "react-icons/fa";
import Modal from "../../forms/Modal/Modal";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../Store/Store";
import { ImCheckmark } from "react-icons/im";
// interface TableProbs {
//     heads: {
//         head1: string;
//         head2: string;
//         head3: string;
//       head4?: string;
//     }
//     rows: {
//       propery1: string;
//       propery2: string;
//       propery3: string;
//       propery4?: string;
//     }

interface TableProbsForOrders {
  order?: orders;
  orders?: orders[];
  allUsersData?: userState[];
  type: string;
  userFromTheChildren?: (user: userState) => void;
  deleteUser?: (itemId: string) => void;
  banUser?: (itemId: string) => void;
  orderDone?: (itemId: string) => void;
}
type order = {
  id: string;
  title: string;
  price: number;
  physical: number;
  quantity: number;
  img?: string;
};

// }
const Table = ({
  order,
  orders,
  type,
  allUsersData,
  userFromTheChildren,
  deleteUser,
  banUser,
  orderDone,
}: TableProbsForOrders) => {
  const desc = {
    desc1: "alksdjlkajsdajwdlkasjdasidoqw",
    desc2: "aisudhasdasd54asdasdaiusdhasd",
    desc3: "asdhjahsdjahsdiqwuhdpwdhhambn",
  };
  const tags = {
    tag1: "you can see this page again by clicking on the order in your profile",
    tag2: "after your time ran out your order will be dismissed",
  };
  const tpPrices = {
    tp1Price: "",
    tp2Price: "",
    tp3Price: "",
  };
  const isFa = useSelector((state: RootState) => state.lang.isFa);

  const [showOrderModal, setShowOrderModal] = useState(false);
  const [showPlanModal, setShowPlanModal] = useState(false);

  const [selectedOrder, setSelectedOrder] = useState<orders>();
  const [selectedUser, setSelectedUser] = useState<userState>();

  const handleOrderClick = (order: orders) => {
    setShowOrderModal(true);
    setSelectedOrder(order);
  };
  const handlePlanClick = (user: userState) => {
    setShowPlanModal(true);
    setSelectedUser(user);
  };
  const handleCloseOrderModal = () => {
    setShowOrderModal(false);
  };
  const handleClosePlanModal = () => {
    setShowPlanModal(false);
  };

  return (
    <div className="overflow-x-auto">
      <table className="flex table items-start">
        {/* head */}

        <thead>
          {type === "order" ? (
            <tr>
              <th className="text-primary">Product ID</th>
              <th className="text-primary">Product Name</th>
              <th className="text-primary">Product Quantity</th>
              <th className="text-primary">Price</th>
            </tr>
          ) : type === "orders" ? (
            <tr>
              <th className="text-primary">Date</th>
              <th className="text-primary">Paid</th>
              <th className="text-primary">Method</th>
              <th className="text-primary">Total Price</th>
            </tr>
          ) : type === "allOrders" ? (
            <tr className="text-2xl">
              <th className="text-primary">Date</th>
              <th className="text-primary">Paid</th>
              <th className="text-primary">Method</th>
              <th className="text-primary">Total Price</th>
              <th className="text-primary">User Note</th>
              <th className="text-primary">Done</th>
            </tr>
          ) : type === "user" ? (
            <tr>
              <th className="text-primary">Username</th>
              <th className="text-primary">Address</th>
              <th className="text-primary">Country</th>
              <th className="text-primary">City</th>
              <th className="text-primary">Postal/Zip code</th>
              <th className="text-primary">Firstname</th>
              <th className="text-primary">Lastname</th>
            </tr>
          ) : (
            type === "allUsersData" && (
              <tr>
                <th className="text-primary">Username</th>
                <th className="text-primary">Email</th>
                <th className="text-primary">Plan</th>
                {/* <th className="text-primary">UserRefCode</th> */}
                {/* <th className="text-primary">Firstname</th>
              <th className="text-primary">Lastname</th> */}
                {/* <th className="text-primary">Phone</th>
              <th className="text-primary">Pic</th> */}
                <th className="text-primary">Role</th>
                {/* <th className="text-primary">Orders</th> */}
                <th className="text-primary">Manage</th>
              </tr>
            )
          )}
        </thead>

        <tbody className="">
          {type === "order" &&
            order?.productName.map((elm: order) => (
              <tr key={elm.id}>
                <td className="text-neutral">{elm.id}</td>
                <td className="text-neutral">{elm.title}</td>
                <td className="text-neutral">{elm.quantity}</td>
                <td className="text-neutral">{elm.price}</td>
              </tr>
            ))}
          {type === "orders" &&
            orders?.map((elm) => (
              <tr
                className="text-gray-400 cursor-pointer"
                onClick={() => handleOrderClick(elm)}
                key={elm._id}
              >
                <td>
                  {new Date(elm.orderDate).toLocaleDateString(
                    `${isFa ? "fa" : "en"}`,
                    {
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                      hour12: false,
                    }
                  )}
                </td>
                <td className="text-gray-400">
                  {elm.paymentMethod.paid ? "yes" : "no"}
                </td>
                <td className="text-gray-400">{elm.paymentMethod.method}</td>
                <td className="text-gray-400">{elm.totalPrice}</td>
              </tr>
            ))}
          {type === "allOrders" &&
            orders?.map((elm) => (
              <tr
                className="text-gray-400 cursor-pointer"
                onClick={() => handleOrderClick(elm)}
                key={elm._id}
              >
                <td>
                  {new Date(elm.orderDate).toLocaleDateString(
                    `${isFa ? "fa" : "en"}`,
                    {
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                      hour12: false,
                    }
                  )}
                </td>
                <td className="text-gray-400">
                  {elm.paymentMethod.paid ? "yes" : "no"}
                </td>
                <td className="text-gray-400">{elm.paymentMethod.method}</td>
                <td className="text-gray-400">{elm.totalPrice}</td>
                <td className="overflow-x-auto max-w-xs text-gray-400">
                  {elm.userNote}
                </td>
                <td
                  onClick={(e) => {
                    e.stopPropagation();
                    if (orderDone) orderDone(elm?._id);
                  }}
                  className={`cursor-pointer ${
                    elm.done ? "text-green-700" : "text-gray-400"
                  }`}
                >
                  <div className="flex gap-2 items-center">
                    {" "}
                    <ImCheckmark />
                    {elm.done ? "(yes)" : "(no)"}
                  </div>
                </td>
              </tr>
            ))}
          {type === "user" && (
            <tr>
              <td className="text-neutral">{order?.userInfo.username}</td>
              <td className="text-neutral">
                {order?.userInfo.shippingAddress.address}
              </td>
              <td className="text-neutral">
                {order?.userInfo.shippingAddress.country}
              </td>
              <td className="text-neutral">
                {order?.userInfo.shippingAddress.city}
              </td>
              <td className="text-neutral">
                {order?.userInfo.shippingAddress.zipCode}
              </td>
              <td className="text-neutral">
                {order?.userInfo.shippingAddress.firstname}
              </td>
              <td className="text-neutral">
                {order?.userInfo.shippingAddress.lastname}
              </td>
            </tr>
          )}
          {type === "allUsersData" &&
            allUsersData?.map((user: userState) => (
              <tr
                onClick={() => {
                  if (userFromTheChildren) userFromTheChildren(user);
                }}
                className="cursor-pointer"
                key={user.username}
              >
                <td className="text-gray-400">{user?.username}</td>
                <td className="text-gray-400">
                  {user?.email.email}
                  {user?.email.confirm ? "(confirmed)" : "(not confirmed)"}
                </td>
                <td
                  onClick={() => handlePlanClick(user)}
                  className="text-gray-400"
                >
                  {user?.plan.type}-[
                  {user?.plan.remaining}/{user?.plan.maxDays}]
                </td>
                <td className="flex gap-2 items-center text-gray-400">
                  {user?.role}
                </td>
                <td className="text-gray-400">
                  <div className="flex gap-2 justify-center items-center">
                    <div
                      onClick={() => {
                        if (deleteUser) deleteUser(user?.username);
                      }}
                      className="cursor-pointer"
                    >
                      <BsFillTrashFill />
                    </div>
                    <div
                      onClick={() => {
                        if (banUser) banUser(user?.username);
                      }}
                      className={`cursor-pointer ${
                        user?.ban && "text-red-700"
                      }`}
                    >
                      <FaBan />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Modal
        key={selectedUser?.username || ""}
        id={selectedUser?.username || ""}
        type={"plan"}
        showModal={showPlanModal}
        handleClose={handleClosePlanModal}
        img={selectedUser?.pic || ""}
        title={selectedUser?.username || ""}
        user={selectedUser}
      />
      <Modal
        key={selectedOrder?._id || ""}
        physical={false} //doest matter
        tpPrices={tpPrices} //doest matter
        entryPoint={""} //doest matter
        alertDesc={""} //doest matter
        children={<></>} //doest matter
        price={selectedOrder?.totalPrice || 0}
        id={selectedOrder?._id || ""}
        type={"checkout"}
        showModal={showOrderModal}
        handleClose={handleCloseOrderModal}
        img={""}
        desc={desc}
        tags={tags}
        crypto={""} //doest matter
        title={selectedOrder?._id || ""}
        order={selectedOrder}
      />
    </div>
  );
};
export default Table;
