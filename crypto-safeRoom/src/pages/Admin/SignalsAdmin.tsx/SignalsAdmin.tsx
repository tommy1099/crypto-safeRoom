import React, { useState, useEffect } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { BiSolidEdit } from "react-icons/bi";
import { AiFillPlusCircle } from "react-icons/ai";
import { Card } from "../../../components/forms";
import { ExpandedSidePanel } from "../../../components/ui";
// import { FcEditImage } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Store/Store";
import { EditModeToggle } from "../../../Store/EditModeReducer";
import { AiOutlineSend } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { BackendAddress } from "../../../utils/BackendAddress/BackendAddress";
import { Container } from "../..";
import Cookies from "js-cookie";
type SentForm = {
  img: File | null;
  crypto: string;
  entryPoint: string;
  desc: {
    desc1: string;
    desc2: string;
    desc3: string;
  };
  tpPrices: {
    tp1Price: string;
    tp2Price: string;
    tp3Price: string;
  };
  alertDesc: string;
  tags: {
    tag1: string;
    tag2: string;
  };
  vip: boolean;
  blur: boolean;
  state: boolean;
};
type recievedSignals = {
  _id: string;
  img: string;
  crypto: string;
  entryPoint: string;
  desc: {
    desc1: string;
    desc2: string;
    desc3: string;
  };
  alertDesc: string;
  tags: {
    tag1: string;
    tag2: string;
  };
  vip: boolean;
  blur: boolean;
  state: boolean;
  tp: {
    tp1: boolean;
    tp2: boolean;
    tp3: boolean;
  };
  tpPrices: {
    tp1Price: string;
    tp2Price: string;
    tp3Price: string;
  };
};
const SignalsAdmin: React.FC = () => {
  const accessToken = Cookies.get("accessToken");
  const isFa = useSelector((state: RootState) => state.lang.isFa);

  const abortController = new AbortController();
  const { signal } = abortController;
  // const [isLoaded, setIsLoaded] = useState(false);

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  // const [showSendImage, setShowSendImage] = useState(false);
  const [newSignalsList, setNewSignalsList] = useState<recievedSignals[]>([]);
  const [formDataState, setFormDataState] = useState<SentForm>({
    img: null,
    crypto: "",
    entryPoint: "",
    desc: {
      desc1: "", // Correct initial state property name
      desc2: "", // Correct initial state property name
      desc3: "", // Correct initial state property name
    },
    tpPrices: {
      tp1Price: "", // Correct initial state property name
      tp2Price: "", // Correct initial state property name
      tp3Price: "", // Correct initial state property name
    },
    alertDesc: "",
    tags: {
      tag1: "",
      tag2: "",
    },
    vip: false,
    blur: false, // Initialize 'blur' and 'state' with default values
    state: false,
  });
  const dispatch = useDispatch();
  const inEdit = useSelector((state: RootState) => state.editMode.Edit);
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setSelectedImage(file);
  };
  const createNewItem = async () => {
    try {
      const formData = new FormData();
      formData.append("img", selectedImage || ""); // Append the image to FormData
      formData.append("crypto", formDataState.crypto);
      formData.append("entryPoint", formDataState.entryPoint);
      formData.append("alertDesc", formDataState.alertDesc);
      formData.append("desc1", formDataState.desc.desc1);
      formData.append("desc2", formDataState.desc.desc2);
      formData.append("desc3", formDataState.desc.desc3);
      formData.append("tp1Price", formDataState.tpPrices.tp1Price);
      formData.append("tp2Price", formDataState.tpPrices.tp2Price);
      formData.append("tp3Price", formDataState.tpPrices.tp3Price);
      formData.append("tag1", formDataState.tags.tag1);
      formData.append("tag2", formDataState.tags.tag2);
      formData.append("vip", String(formDataState.vip));
      console.log("newForm", ...formData);
      const response = await fetch(`${BackendAddress()}/signals/create`, {
        signal,
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData, //sending the form data to the backend
      });

      if (response.ok) {
        const data: SentForm = await response.json();
        console.log("New item created:", data);
      } else {
        console.error("Error creating new item");
      }
    } catch (error) {
      console.error("Error creating new item:", error);
    }
    abortController.abort();
  };

  const handleFormChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormDataState((prevData: SentForm) => {
      if (name === "img") {
        return {
          ...prevData,
          img: selectedImage,
        };
      } else if (name.startsWith("desc")) {
        const descNumber = name.replace("desc", "");
        return {
          ...prevData,
          desc: {
            ...prevData.desc,
            [`desc${descNumber}`]: value,
          },
        };
      } else if (name.startsWith("tag")) {
        const tagNumber = name.replace("tag", "");
        return {
          ...prevData,
          tags: {
            ...prevData.tags,
            [`tag${tagNumber}`]: value,
          },
        };
      } else if (name === "entryPoint") {
        return {
          ...prevData,
          entryPoint: value,
        };
      } else if (name.startsWith("priceDesc")) {
        const tpNumber = name.replace("priceDesc", "");
        return {
          ...prevData,
          tpPrices: {
            ...prevData.tpPrices,
            [`tp${tpNumber}Price`]: value,
          },
        };
      } else if (name === "alertDesc") {
        return {
          ...prevData,
          alertDesc: value,
        };
      } else {
        return {
          ...prevData,
          [name]: value,
        };
      }
    });
  };

  // const handleFormChangeEdit = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = event.target;

  //   setFormDataState((prevData: SentForm) => {
  //     if (name.startsWith("desc")) {
  //       const descNumber = name.replace("desc", "");
  //       return {
  //         ...prevData,
  //         desc: {
  //           ...prevData.desc,
  //           [`desc${descNumber}`]: value,
  //         },
  //       };
  //     } else if (name.startsWith("tag")) {
  //       const tagNumber = name.replace("tag", "");
  //       return {
  //         ...prevData,
  //         tags: {
  //           ...prevData.tags,
  //           [`tag${tagNumber}`]: value,
  //         },
  //       };
  //     } else {
  //       return {
  //         ...prevData,
  //         [name]: value,
  //       };
  //     }
  //   });
  // };
  // const handleEditButton = async (itemId: string) => {
  //   dispatch(EditModeToggle());

  //   // Create a new FormData object to send the file
  //   const formData = new FormData();
  //   formData.append("img", selectedImage || "");

  //   try {
  //     const response = await fetch(
  //       `http://localhost:4444/admin/dashboard/signals/imgUpdate/${itemId}`,
  //       {
  //         method: "PUT", // Use PUT method for updating the image
  //         body: formData, // Send the FormData object containing the image
  //       }
  //     );

  //     if (response.ok) {
  //       // Handle a successful response
  //       // You may want to update your UI or display a success message.
  //     } else {
  //       // Handle errors
  //       console.error("Image update failed.");
  //     }
  //   } catch (error) {
  //     // Handle network or request-related errors
  //     console.error("Network error:", error);
  //   }
  // };

  const handleDeleteButton = async (itemId: string) => {
    try {
      const response = await fetch(
        `${BackendAddress()}/signals/delete/${itemId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(`${BackendAddress()}/${itemId}`);
      if (response.ok) {
        const remainingItems = newSignalsList.filter(
          (item) => item._id !== itemId
        );
        setNewSignalsList(remainingItems);
        console.log("Item deleted:", itemId);
      } else {
        console.error("Error deleting item");
        // Add code to handle the error, such as showing an error message to the user.
      }
    } catch (error) {
      console.error("Error deleting item:", error);
      // Add code to handle network-related errors, e.g., network is down.
    }
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const signalUpdate = async (value: string, itemId: string) => {
    const data = { state: value };

    try {
      const response = await fetch(
        `${BackendAddress()}/signals/signalUpdate/${itemId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data), // Send the data as JSON
        }
      );

      if (response.ok) {
        // Handle a successful response
        // You may want to update your UI or display a success message.
      } else {
        // Handle errors
        console.error("state update failed.");
      }
    } catch (error) {
      // Handle network or request-related errors
      console.error("Network error:", error);
    }
  };
  const failedSignalsUpdate = async (value: string, itemId: string) => {
    const data = { state: value };

    try {
      const response = await fetch(
        `${BackendAddress()}/signals/failedSignalUpdate/${itemId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(data), // Send the data as JSON
        }
      );

      if (response.ok) {
        // Handle a successful response
        // You may want to update your UI or display a success message.
      } else {
        // Handle errors
        console.error("state update failed.");
      }
    } catch (error) {
      // Handle network or request-related errors
      console.error("Network error:", error);
    }
  };
  const submitSignal = async (itemId: string) => {
    try {
      const response = await fetch(
        `${BackendAddress()}/signals/submitSignal/${itemId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          // Send the data as JSON
        }
      );

      if (response.ok) {
        // Handle a successful response
        // You may want to update your UI or display a success message.
      } else {
        // Handle errors
        console.error("state update failed.");
      }
    } catch (error) {
      // Handle network or request-related errors
      console.error("Network error:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BackendAddress()}/signals`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setNewSignalsList(data);
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
  }, [dispatch]);
  return (
    <Container
      dir={`${isFa ? "rtl" : "ltr"}`}
      style="grid grid-cols-4 mx-[20%]"
    >
      {newSignalsList
        .filter((component) => !component.blur)
        .map((component, index) => (
          <div key={component._id} className="flex flex-col">
            {inEdit && (
              <div className="flex gap-1 justify-around items-center px-3 mb-1 rounded-md bg-[#2c2c2c]">
                <div
                  onClick={() => {
                    handleDeleteButton(component._id);
                    // console.log(component._id);
                  }}
                  className="text-2xl text-red-500 cursor-pointer hover:text-red-400 active:text-red-300"
                >
                  <BsFillTrashFill />
                </div>

                <div
                  onClick={() => signalUpdate("tp1", component._id)}
                  className="px-2 bg-green-700 rounded-md cursor-pointer text-base-100 hover:bg-green-500 active:bg-green-400"
                >
                  1
                </div>
                <div
                  onClick={() => signalUpdate("tp2", component._id)}
                  className="px-2 bg-green-700 rounded-md cursor-pointer text-base-100 hover:bg-green-500 active:bg-green-400"
                >
                  2
                </div>
                <div
                  onClick={() => signalUpdate("tp3", component._id)}
                  className="px-2 bg-green-700 rounded-md cursor-pointer text-base-100 hover:bg-green-500 active:bg-green-400"
                >
                  3
                </div>
                <div
                  onClick={() => submitSignal(component._id)}
                  className="text-2xl text-green-700 rounded-md cursor-pointer hover:text-green-500 active:text-green-400"
                >
                  <AiOutlineSend />
                </div>
                <div
                  onClick={() => failedSignalsUpdate("stop", component._id)}
                  className="text-2xl text-red-700 cursor-pointer hover:text-red-500 active:text-red-400"
                >
                  <ImCross />
                </div>
              </div>
            )}
            <Card
              handleClose={() => {}}
              alertDesc={component.alertDesc}
              entryPoint={component.entryPoint}
              tpPrices={component.tpPrices}
              physical={false}
              key={index.toString()} // Add a unique key prop
              type="signals"
              tp={component.tp}
              state={component.state}
              blur={component.blur}
              id={component._id}
              vip={component.vip}
              img={component.img}
              crypto={component.crypto}
              desc={component.desc}
              tags={component.tags}
            />
            <span className="mt-10" />
          </div>
        ))}
      {newSignalsList
        .filter((component) => component.blur)
        .map((component, index) => (
          <div key={component._id} className="flex flex-col">
            {inEdit && (
              <div className="flex gap-1 justify-around items-center px-3 mb-1 rounded-md bg-[#2c2c2c]">
                <div
                  onClick={() => {
                    handleDeleteButton(component._id);
                    // console.log(component._id);
                  }}
                  className="text-2xl text-red-500 cursor-pointer hover:text-red-400 active:text-red-300"
                >
                  <BsFillTrashFill />
                </div>

                <div
                  onClick={() => signalUpdate("tp1", component._id)}
                  className="px-2 bg-green-700 rounded-md cursor-pointer text-base-100 hover:bg-green-500 active:bg-green-400"
                >
                  1
                </div>
                <div
                  onClick={() => signalUpdate("tp2", component._id)}
                  className="px-2 bg-green-700 rounded-md cursor-pointer text-base-100 hover:bg-green-500 active:bg-green-400"
                >
                  2
                </div>
                <div
                  onClick={() => signalUpdate("tp3", component._id)}
                  className="px-2 bg-green-700 rounded-md cursor-pointer text-base-100 hover:bg-green-500 active:bg-green-400"
                >
                  3
                </div>
                <div
                  onClick={() => submitSignal(component._id)}
                  className="text-2xl rounded-md cursor-pointer text-text-green-700 hover:text-green-500 active:text-green-400"
                >
                  <AiOutlineSend />
                </div>
                <div
                  onClick={() => failedSignalsUpdate("stop", component._id)}
                  className="text-2xl text-red-700 cursor-pointer hover:text-red-500 active:text-red-400"
                >
                  <ImCross />
                </div>
              </div>
            )}
            <Card
              handleClose={() => {}}
              alertDesc={component.alertDesc}
              entryPoint={component.entryPoint}
              tpPrices={component.tpPrices}
              physical={false}
              key={index.toString()} // Add a unique key prop
              type="signals"
              tp={component.tp}
              state={component.state}
              blur={component.blur}
              id={component._id}
              vip={component.vip}
              img={component.img}
              crypto={component.crypto}
              desc={component.desc}
              tags={component.tags}
            />
            <span className="mt-10" />
          </div>
        ))}
      <ExpandedSidePanel>
        <form className="flex flex-col gap-2 w-[230px] text-[#777] justify-between">
          <label htmlFor="img">crypto image:</label>
          <input
            name="img"
            accept="image/*"
            id="img"
            type="file"
            className=""
            onChange={handleImageChange}
          />

          <label htmlFor="crypto">Crypto:</label>
          <input
            name="crypto"
            id="crypto"
            type="text"
            className="pl-5 mt-2 w-full rounded-md border border-neutral bg-base-100 focus:border-primary focus:border-2 focus:outline-none placeholder:text-neutral"
            onChange={handleFormChange}
          />
          <label htmlFor="desc1">Entry Point</label>
          <input
            name="ep"
            id="ep"
            type="text"
            className="pl-5 mt-2 w-full rounded-md border border-neutral bg-base-100 focus:border-primary focus:border-2 focus:outline-none placeholder:text-neutral"
            onChange={handleFormChange}
          />
          <div className="flex gap-1">
            <div className="flex flex-col">
              <label htmlFor="desc1">TP1:</label>
              <input
                name="desc1"
                id="desc1"
                type="text"
                className="pl-5 mt-2 w-full rounded-md border border-neutral bg-base-100 focus:border-primary focus:border-2 focus:outline-none placeholder:text-neutral"
                onChange={handleFormChange}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="priceDesc1">Price:</label>
              <input
                name="priceDesc1"
                id="priceDesc1"
                type="text"
                className="pl-5 mt-2 w-full rounded-md border border-neutral bg-base-100 focus:border-primary focus:border-2 focus:outline-none placeholder:text-neutral"
                onChange={handleFormChange}
              />
            </div>
          </div>

          <div className="flex gap-1">
            <div className="flex flex-col">
              <label htmlFor="desc2">TP2:</label>
              <input
                name="desc2"
                id="desc2"
                type="text"
                className="pl-5 mt-2 w-full rounded-md border border-neutral bg-base-100 focus:border-primary focus:border-2 focus:outline-none placeholder:text-neutral"
                onChange={handleFormChange}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="priceDesc2">Price:</label>
              <input
                name="priceDesc2"
                id="priceDesc2"
                type="text"
                className="pl-5 mt-2 w-full rounded-md border border-neutral bg-base-100 focus:border-primary focus:border-2 focus:outline-none placeholder:text-neutral"
                onChange={handleFormChange}
              />
            </div>
          </div>

          <div className="flex gap-1">
            <div className="flex flex-col">
              <label htmlFor="desc3">TP3:</label>
              <input
                name="desc3"
                id="desc3"
                type="text"
                className="pl-5 mt-2 w-full rounded-md border border-neutral bg-base-100 focus:border-primary focus:border-2 focus:outline-none placeholder:text-neutral"
                onChange={handleFormChange}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="priceDesc3">Price:</label>
              <input
                name="priceDesc3"
                id="priceDesc3"
                type="text"
                className="pl-5 mt-2 w-full rounded-md border border-neutral bg-base-100 focus:border-primary focus:border-2 focus:outline-none placeholder:text-neutral"
                onChange={handleFormChange}
              />
            </div>
          </div>

          <div className="flex gap-1">
            <div className="flex flex-col">
              <label htmlFor="tag1">SL:</label>
              <input
                name="tag1"
                id="tag1"
                type="text"
                className="pl-5 mt-2 w-full rounded-md border border-neutral bg-base-100 focus:border-primary focus:border-2 focus:outline-none placeholder:text-neutral"
                onChange={handleFormChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="tag2">Long/Short:</label>
              <input
                name="tag2"
                id="tag2"
                type="text"
                className="pl-5 mt-2 w-full rounded-md border border-neutral bg-base-100 focus:border-primary focus:border-2 focus:outline-none placeholder:text-neutral"
                onChange={handleFormChange}
              />
            </div>
          </div>
          <label htmlFor="alertDesc">More:</label>
          <textarea
            name="alertDesc"
            id="alertDesc"
            className="px-2 mt-2 w-full rounded-md border border-neutral bg-base-100 focus:border-primary focus:border-2 focus:outline-none placeholder:text-neutral"
            dir="rtl"
            onChange={handleFormChange}
          />
          <div className="flex justify-around">
            <label htmlFor="vip">VIP: </label>
            <input
              name="vip"
              id="vip"
              type="checkbox"
              className=""
              onChange={handleFormChange}
            />
          </div>

          <div className="flex justify-around">
            <div
              onClick={createNewItem}
              className="text-5xl text-green-500 cursor-pointer hover:text-green-400 active:text-green-300"
            >
              <AiFillPlusCircle />
            </div>
            <div
              onClick={() => {
                dispatch(EditModeToggle());
                // setShowSendImage(false);
              }}
              className="text-5xl text-yellow-500 cursor-pointer hover:text-yellow-400 active:text-yellow-300"
            >
              <BiSolidEdit />
            </div>
          </div>
        </form>
      </ExpandedSidePanel>
    </Container>
  );
};

export default SignalsAdmin;
