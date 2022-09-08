import React from "react";
import "./Header.css";

import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationIcon from "@material-ui/icons/Notifications";

import HeaderOptions from "../HeaderOptions/HeaderOptions";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import { auth } from "../../service/firebase";

function Header() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  console.log(user)
  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut()
  }


  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
          alt="Logo"
        />

        <div className="header_search">
          <SearchIcon />
          <input placeholder="search" type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOptions Icon={ChatIcon} title="Messaging" />
        <HeaderOptions Icon={NotificationIcon} title="Notifications" />
        <HeaderOptions avatar={user.profileUrl} title="me" onClick={logoutOfApp}/>
      </div>
    </div>
  );
}

export default Header;
