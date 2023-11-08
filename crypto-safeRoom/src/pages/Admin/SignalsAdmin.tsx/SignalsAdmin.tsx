import React, { useState, useEffect } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { BiSolidEdit } from "react-icons/bi";
import { AiFillPlusCircle } from "react-icons/ai";
import { Card, Loading } from "../../../components/forms";
import { ExpandedSidePanel } from "../../../components/ui";
// import { FcEditImage } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Store/Store";
import { EditModeToggle } from "../../../Store/EditModeReducer";
import { AiOutlineSend } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { BackendAddress } from "../../../utils/BackendAddress/BackendAddress";
import { Container } from "../..";
type SentForm = {
  img: File | null;
  crypto: string;
  desc: {
    desc1: string;
    desc2: string;
    desc3: string;
  };
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
  desc: {
    desc1: string;
    desc2: string;
    desc3: string;
  };
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
};
const SignalsAdmin: React.FC = () => {
  const isFa = useSelector((state: RootState) => state.lang.isFa);

  const abortController = new AbortController();
  const { signal } = abortController;
  const [isLoaded, setIsLoaded] = useState(false);

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  // const [showSendImage, setShowSendImage] = useState(false);
  const [newSignalsList, setNewSignalsList] = useState<recievedSignals[]>([]);
  const [formDataState, setFormDataState] = useState<SentForm>({
    img: null,
    crypto: "",
    desc: {
      desc1: "", // Correct initial state property name
      desc2: "", // Correct initial state property name
      desc3: "", // Correct initial state property name
    },
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
      formData.append("desc1", formDataState.desc.desc1);
      formData.append("desc2", formDataState.desc.desc2);
      formData.append("desc3", formDataState.desc.desc3);
      formData.append("tag1", formDataState.tags.tag1);
      formData.append("tag2", formDataState.tags.tag2);
      formData.append("vip", String(formDataState.vip));
      console.log(...formData);
      const response = await fetch(`${BackendAddress()}/signals/create`, {
        signal,
        method: "POST",
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

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
            "Content-Type": "application/json",
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
            "Content-Type": "application/json", // Set the content type to JSON
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
            "Content-Type": "application/json", // Set the content type to JSON
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
            "Content-Type": "application/json", // Set the content type to JSON
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
  // const updateItem = async (itemId: string) => {
  //   try {
  //     const formData = new FormData();
  //     formData.append("crypto", formDataState.crypto);
  //     formData.append("desc1", formDataState.desc.desc1);
  //     formData.append("desc2", formDataState.desc.desc2);
  //     formData.append("desc3", formDataState.desc.desc3);
  //     formData.append("tag1", formDataState.tags.tag1);
  //     formData.append("tag2", formDataState.tags.tag2);
  //     // console.log("formData:", formData);
  //     const response = await fetch(
  //       `http://localhost:4444/admin/dashboard/signals/bodyUpdate/${itemId}`,
  //       {
  //         method: "POST",
  //         body: formData, //sending the form data to the backend
  //       }
  //     );

  //     if (response.ok) {
  //       const data: SentForm = await response.json();
  //       console.log("New item created:", data);
  //     } else {
  //       console.error("Error creating new item");
  //     }
  //   } catch (error) {
  //     console.error("Error creating new item:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetch(`${BackendAddress()}/signals`, {
  //     signal: abortController.signal,
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then((responseData: recievedSignals[]) => {
  //       setIsLoaded(true);
  //       const sortedData = [...responseData].sort((a, b) => {
  //         return a.blur === b.blur ? 0 : a.blur ? 1 : -1;
  //       });
  //       console.log("sortedData:", sortedData);
  //       setNewSignalsList(sortedData);
  //     })
  //     .catch((error) => {
  //       setIsLoaded(true);
  //       console.error("Error fetching data:", error);
  //     });
  //   return () => {
  //     abortController.abort();
  //   };
  // });

  useEffect(() => {
    const eventSource = new EventSource(`${BackendAddress()}/signals`);

    eventSource.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);
      setIsLoaded(true);
      setNewSignalsList(data);
    });

    return () => {
      // Cleanup when the component unmounts
      eventSource.close();
    };
  }, []);
  return (
    <Container
      dir={`${isFa ? "rtl" : "ltr"}`}
      style="grid grid-cols-5 w-[1000px]"
    >
      {!isLoaded && <Loading />}
      {newSignalsList.map((component) => (
        <div key={component._id} className="flex flex-col">
          {inEdit && (
            <div className="flex gap-3 justify-around items-center px-3 mb-1 bg-gray-200 rounded-md">
              <div
                onClick={() => {
                  handleDeleteButton(component._id);
                  // console.log(component._id);
                }}
                className="text-2xl text-red-500 cursor-pointer hover:text-red-400 active:text-red-300"
              >
                <BsFillTrashFill />
              </div>

              {/* <div className="flex">
                <label
                  onClick={() => {
                    setShowSendImage(true);
                  }}
                  className="mr-5 text-2xl cursor-pointer"
                  htmlFor="img"
                >
                  <FcEditImage />
                </label>
                <input
                  name="img"
                  accept="image/*"
                  id="img"
                  type="file"
                  className="hidden"
                  onChange={handleImageChange}
                />

                {showSendImage && (
                  <div
                    onClick={() => {
                      handleEditButton(component._id);
                    }}
                    className="text-2xl text-green-500 hover:text-green-400 active:text-green-300"
                  >
                    <AiOutlineSend />
                  </div>
                )}
              </div> */}
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
            tp={component.tp}
            img={component.img}
            type="signals"
            state={component.state}
            blur={component.blur}
            id={component._id}
            crypto={component.crypto}
            desc={component.desc}
            tags={component.tags}
          />
          <span className="mt-10" />
        </div>
      ))}
      <ExpandedSidePanel>
        <form className="flex flex-col gap-2 w-[230px]">
          <label htmlFor="img">Choose your file:</label>
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
            className="border"
            onChange={handleFormChange}
          />

          <label htmlFor="desc1">TP1:</label>
          <input
            name="desc1"
            id="desc1"
            type="text"
            className="border"
            onChange={handleFormChange}
          />

          <label htmlFor="desc2">TP2:</label>
          <input
            name="desc2"
            id="desc2"
            type="text"
            className="border"
            onChange={handleFormChange}
          />

          <label htmlFor="desc3">TP3:</label>
          <input
            name="desc3"
            id="desc3"
            type="text"
            className="border"
            onChange={handleFormChange}
          />

          <label htmlFor="tag1">SL:</label>
          <input
            name="tag1"
            id="tag1"
            type="text"
            className="border"
            onChange={handleFormChange}
          />

          <label htmlFor="tag2">Long/Short:</label>
          <input
            name="tag2"
            id="tag2"
            type="text"
            className="border"
            onChange={handleFormChange}
          />
          <div className="flex gap-10">
            <label htmlFor="vip">VIP: </label>
            <input
              name="vip"
              id="vip"
              type="checkbox"
              className="border"
              onChange={handleFormChange}
            />
          </div>

          <div
            onClick={createNewItem}
            className="fixed right-0 bottom-0 p-5 text-7xl text-green-500 cursor-pointer hover:text-green-400 active:text-green-300"
          >
            <AiFillPlusCircle />
          </div>
        </form>

        <div
          onClick={() => {
            dispatch(EditModeToggle());
            // setShowSendImage(false);
          }}
          className="fixed bottom-[3%] right-[5%] text-6xl text-yellow-500 cursor-pointer hover:text-yellow-400 active:text-yellow-300"
        >
          <BiSolidEdit />
        </div>
      </ExpandedSidePanel>
    </Container>
  );
};

export default SignalsAdmin;
