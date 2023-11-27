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
import { BackendAddress } from "../../../utils/BackendAddress/BackendAddress";
// import { AiOutlineSend } from "react-icons/ai";

type SentForm = {
  img: File | null;
  title: string;
  desc: {
    desc1: string;
  };
};
type recievedNews = {
  _id: string;
  img: string;
  title: string;
  desc: {
    desc1: string;
  };
};
const NewsAdmin = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  // const [showSendImage, setShowSendImage] = useState(false);
  const [newNewsList, setNewNewsList] = useState<recievedNews[]>([]);
  const [formDataState, setFormDataState] = useState<SentForm>({
    img: null,
    title: "",
    desc: {
      desc1: "",
    },
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
      formData.append("title", formDataState.title);
      // console.log("cyrpto:", formDataState.crypto);

      formData.append("desc1", formDataState.desc.desc1);
      // console.log("desc1:", formDataState.desc.desc1);

      console.log("formData:", formData);
      const response = await fetch(
        `${BackendAddress()}/admin/dashboard/news/create`,
        {
          method: "POST",
          body: formData, //sending the form data to the backend
        }
      );

      if (response.ok) {
        const data: SentForm = await response.json();
        console.log("New item created:", data);
      } else {
        console.error("Error creating new item");
      }
    } catch (error) {
      console.error("Error creating new item:", error);
    }
  };

  const handleFormChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
        `${BackendAddress()}/admin/dashboard/news/delete/${itemId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const remainingItems = newNewsList.filter(
          (item) => item._id !== itemId
        );
        setNewNewsList(remainingItems);
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

  useEffect(() => {
    fetch(`${BackendAddress()}/admin/dashboard/news`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData: recievedNews[]) => {
        setIsLoaded(true);
        const sortedData = [...responseData].sort((a, b) => {
          return a._id === b._id ? 0 : a._id ? 1 : -1;
        });
        console.log("sortedData:", sortedData);
        setNewNewsList(sortedData);
      })
      .catch((error) => {
        setIsLoaded(true);
        console.error("Error fetching data:", error);
      });
  }, [setNewNewsList]);

  return (
    <>
      {!isLoaded && <Loading />}
      {newNewsList.map((component) => (
        <div key={component._id} className="flex flex-col">
          {inEdit && (
            <div className="flex gap-3 justify-around p-2 mb-1 bg-gray-200 rounded-md">
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
            </div>
          )}
          <Card
            img={component.img}
            type="news"
            id={component._id}
            title={component.title}
            desc={component.desc}
            physical={false}
            key=""
          />
          <span className="mt-10" />
        </div>
      ))}
      <ExpandedSidePanel>
        <form className="flex flex-col gap-2 w-[230px]">
          <label htmlFor="img">Choose your image:</label>
          <input
            name="img"
            accept="image/*"
            id="img"
            type="file"
            className=""
            onChange={handleImageChange}
          />
          <label htmlFor="title">title:</label>
          <input
            name="title"
            id="title"
            type="text"
            className="border"
            onChange={handleFormChange}
          />
          <label htmlFor="desc1">Desc</label>
          <textarea
            name="desc1"
            id="desc1"
            className="border"
            onChange={handleFormChange}
          />
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
          className="fixed bottom-[3%] text-6xl text-yellow-500 cursor-pointer hover:text-yellow-400 active:text-yellow-300"
        >
          <BiSolidEdit />
        </div>
      </ExpandedSidePanel>
    </>
  );
};
export default NewsAdmin;
