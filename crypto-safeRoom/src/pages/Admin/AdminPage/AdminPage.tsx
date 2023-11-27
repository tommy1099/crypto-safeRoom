import { NewsAdmin, SignalsAdmin } from "../..";
import { useState } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
  menuClasses,
} from "react-pro-sidebar";

const pagesMenu = [
  { id: "signalsAdmin", label: "Signals" },
  { id: "newsAdmin", label: "News" },
  { id: "productsAdmin", label: "Products" },
  { id: "tutorialsAdmin", label: "Tutorials" },
];
const othersMenu = [
  { id: "homeAdmin", label: "Home" },
  { id: "usersAdmin", label: "Users" },
  { id: "AllOrders", label: "Orders" },
  { id: "logsAdmin", label: "Logs" },
];
const AdminPage = () => {
  const [selectedTab, setSelectedTab] = useState("");

  const handleSelectTab = (value: string) => {
    setSelectedTab(value);
  };
  const renderSelectedComponent = () => {
    switch (selectedTab) {
      case "signalsAdmin":
        return <SignalsAdmin />;
      case "newsAdmin":
        return <NewsAdmin />;
      // Add other cases for each tab
      default:
        return null;
    }
  };

  return (
    <>
      <div className="bg-[#222] min-h-screen ">
        <div className="h-full fixed top-0 bg-[#2c2c2c] text-[#777]">
          <Sidebar
            rootStyles={{
              [`.${sidebarClasses.container}`]: {
                backgroundColor: "#2c2c2c",
              },
              [`.${sidebarClasses.toggled}`]: {
                backgroundColor: "#ee8f50",
              },
              [`.${menuClasses.subMenuContent}`]: {
                backgroundColor: "#212121",
                textColor: "#ee8f50",
              },
            }}
          >
            <Menu>
              <SubMenu label="Pages">
                {pagesMenu.map((tab) => (
                  <MenuItem
                    key={tab.id}
                    onClick={() => handleSelectTab(tab.id)}
                    className={selectedTab === tab.id ? "active" : ""}
                  >
                    {tab.label}
                  </MenuItem>
                ))}
              </SubMenu>
              <SubMenu label="Others">
                {othersMenu.map((tab) => (
                  <MenuItem
                    key={tab.id}
                    onClick={() => handleSelectTab(tab.id)}
                    className={selectedTab === tab.id ? "active" : ""}
                  >
                    {tab.label}
                  </MenuItem>
                ))}
              </SubMenu>
            </Menu>
          </Sidebar>
        </div>

        {renderSelectedComponent()}
      </div>
    </>
  );
};

export default AdminPage;
