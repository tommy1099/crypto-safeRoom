import { Container, NewsAdmin, SignalsAdmin } from "../..";
import { useState } from "react";
import { Input } from "../../../components/ui";

const tabData = [
  { id: "homeAdmin", label: "Home" },
  { id: "signalsAdmin", label: "Signals" },
  { id: "newsAdmin", label: "News" },
  { id: "productsAdmin", label: "Products" },
  { id: "tutorialsAdmin", label: "Tutorials" },
  { id: "usersAdmin", label: "Users" },
  { id: "logsAdmin", label: "Logs" },
];

const AdminPage = () => {
  const [selectedTab, setSelectedTab] = useState("");

  const handleSelectTab = (value: string) => {
    setSelectedTab(value);
  };

  return (
    <div className="flex justify-start">
      <Container style="fixed font-semibold gap-10 items-center text-white justify-center w-[200px] h-[1000px] relative  bg-gray-800">
        {tabData.map((tab) => (
          <label
            key={tab.id}
            className={`transition-all flex p-2 justify-center items-center w-full hover:bg-white hover:text-black cursor-pointer${
              selectedTab === tab.id
                ? " bg-white text-black"
                : " bg-gray-800 text-white"
            }`}
          >
            <Input
              id={tab.id}
              type="radio"
              name="adminNav"
              style="hidden"
              defaultChecked={selectedTab === tab.id}
              onChange={() => handleSelectTab(tab.id)}
            />
            <p className="">{tab.label}</p>
          </label>
        ))}
      </Container>
      <Container style="relative z-0 w-full grid grid-cols-2 xl:grid-cols-6 m-[5%]">
        {selectedTab === "signalsAdmin" ? (
          <SignalsAdmin />
        ) : selectedTab === "newsAdmin" ? (
          <NewsAdmin />
        ) : (
          ""
        )}
      </Container>
    </div>
  );
};

export default AdminPage;
