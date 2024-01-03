import { useEffect, useState } from "react";
import { Container } from "../..";
import { Table } from "../../../components/ui";
import { BackendAddress } from "../../../utils/BackendAddress/BackendAddress";
import Cookies from "js-cookie";
import { orders } from "../../../Interfaces/Interfaces";

const OrderAdmin = () => {
  const accessToken = Cookies.get("accessToken");
  const [allOrders, setAllOrders] = useState<orders[]>();
  //   const [user, setUser] = useState<userState>();
  const handleOrderDone = async (itemId: string) => {
    try {
      const response = await fetch(
        `${BackendAddress()}/orders/done/${itemId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(`${BackendAddress()}/${itemId}`);
      if (response.ok) {
        console.log("order Done:", itemId);
      } else {
        console.error("Error order Done");
        // Add code to handle the error, such as showing an error message to the user.
      }
    } catch (error) {
      console.error("Error order Done:", error);
      // Add code to handle network-related errors, e.g., network is down.
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BackendAddress()}/orders/allOrders`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setAllOrders(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Error during fetch request:", error.message);
        } else {
          console.error("Unknown error during fetch request:", error);
        }
      }
    };

    fetchData();

    // Use setInterval to fetch data every 10 seconds (optional)
    const intervalId = setInterval(fetchData, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  //   const userFromTheChildren = (user: userState) => {
  //     console.log("user:", user);
  //     setUser(user);
  //   };
  return (
    <Container dir="" style="flex justify-end gap-5">
      <Table type="allOrders" orders={allOrders} orderDone={handleOrderDone} />
    </Container>
  );
};
export default OrderAdmin;
