import { useEffect, useState } from "react";
import { Container } from "../..";
import { Table } from "../../../components/ui";
import { BackendAddress } from "../../../utils/BackendAddress/BackendAddress";
import Cookies from "js-cookie";
import { userState } from "../../../Interfaces/Interfaces";

const UserAdmin = () => {
  const accessToken = Cookies.get("accessToken");
  const [allUsers, setAllUsers] = useState();
  const [user, setUser] = useState<userState>();
  const handleUserDelete = async (itemId: string) => {
    try {
      const response = await fetch(
        `${BackendAddress()}/user/delete/${itemId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(`${BackendAddress()}/${itemId}`);
      if (response.ok) {
        console.log("User deleted:", itemId);
      } else {
        console.error("Error deleting User");
        // Add code to handle the error, such as showing an error message to the user.
      }
    } catch (error) {
      console.error("Error deleting User:", error);
      // Add code to handle network-related errors, e.g., network is down.
    }
  };
  const handleBanUser = async (itemId: string) => {
    try {
      const response = await fetch(`${BackendAddress()}/user/ban/${itemId}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(`${BackendAddress()}/${itemId}`);
      if (response.ok) {
        console.log("User banned:", itemId);
      } else {
        console.error("Error banning User");
        // Add code to handle the error, such as showing an error message to the user.
      }
    } catch (error) {
      console.error("Error banning User:", error);
      // Add code to handle network-related errors, e.g., network is down.
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BackendAddress()}/user/all`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setAllUsers(data);
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
  const userFromTheChildren = (user: userState) => {
    console.log("user:", user);
    setUser(user);
  };
  return (
    <Container dir="" style="flex justify-end gap-5">
      <Table type="orders" orders={user?.orders} />
      <Table
        type="allUsersData"
        allUsersData={allUsers}
        userFromTheChildren={userFromTheChildren}
        deleteUser={handleUserDelete}
        banUser={handleBanUser}
      />
    </Container>
  );
};
export default UserAdmin;
