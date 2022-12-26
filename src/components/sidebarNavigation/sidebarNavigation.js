import {useState} from "react";
import {Sidebar, Menu, MenuItem, useProSidebar} from "react-pro-sidebar";
import {NavLink} from "react-router-dom";

const SidebarNavigation = () => {
  const {collapseSidebar} = useProSidebar();
  const [title, setTitle] = useState("Collapse");

  const onCollapse = () => {
    collapseSidebar();
    title === "Collapse" ? setTitle("Expand") : setTitle("Collapse");
  };

  return (
    <div style={{display: "flex", height: "100%"}}>
      <Sidebar>
        <Menu>
          <MenuItem routerLink={<NavLink to="/questions" />}> Questions</MenuItem>
          <MenuItem routerLink={<NavLink to="/answers" />}> Answers</MenuItem>
        </Menu>
      </Sidebar>
      <main>
        <button onClick={() => onCollapse()}>{title}</button>
      </main>
    </div>
  );
};

export default SidebarNavigation;
