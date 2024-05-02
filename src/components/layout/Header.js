import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from "@mui/material";
import { openModal } from "../../action/modalAction";
import { logout } from '../../action/userAction';
import Login from "../Login";
import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const openModalHandle = () => {
    dispatch(openModal("open", <Login />));
  };

  const logoutHandle = () => {
    dispatch(logout());
  };

  return (
    <div className="header">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbH6RiXIAwFgVDTby3heWkkjQkDbPwx5lAVw&s"
        className="header_logo"
        alt="logo"
      />

      <div className="header_center">
        <input type="text" />
        <SearchIcon />
      </div>

      <div className="header_right">
        <p>Become a host</p>
        <LanguageIcon />
        <div className="dropdown">
          <ExpandMoreIcon className="dropbtn" />
          <div className="dropdown-content">
            {userInfo ? (
              <>
                <span>Account</span>
                <span onClick={logoutHandle}>Log out</span>
              </>
            ) : (
              <>
               <span>Sign Up</span>
               <span onClick={openModalHandle}>Login</span>
              </>
            )}
            <span>Help</span>
          </div>
        </div>
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
