import React from "react";
import SidebarRow from "./SidebarRow.js";
import "./Sidebar.css";
import {
  ChatOutlined,
  EmojiFlags,
  ExpandMore,
  LocalHospitalOutlined,
  PeopleAltOutlined,
  Storefront,
  VideoLibrary,
} from "@material-ui/icons";
import { useStateValue } from "./StateProvider.js";

function Sidebar() {
  const [{ user }] = useStateValue();

  return (
    <div className="sidebar">
      <SidebarRow src={user.photoURL} title={user.displayName}></SidebarRow>
      <SidebarRow
        Icon={LocalHospitalOutlined}
        title="COVID 19 Information Center"
      ></SidebarRow>
      <SidebarRow Icon={EmojiFlags} title="Pages"></SidebarRow>
      <SidebarRow Icon={PeopleAltOutlined} title="Friends"></SidebarRow>
      <SidebarRow Icon={ChatOutlined} title="Messanger"></SidebarRow>
      <SidebarRow Icon={Storefront} title="Marketplace"></SidebarRow>
      <SidebarRow Icon={VideoLibrary} title="Videos"></SidebarRow>
      <SidebarRow Icon={ExpandMore} title="Marketplace"></SidebarRow>
    </div>
  );
}

export default Sidebar;
