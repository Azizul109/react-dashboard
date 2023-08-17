import React from "react";
import { FiShoppingBag, FiSettings } from "react-icons/fi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { GiSchoolBag } from "react-icons/gi";
import { IoWalletOutline } from "react-icons/io5";
import { RiTruckLine } from "react-icons/ri";
import { BiHelpCircle } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import rocket from "../assets/rocket.png";

const Sidebar = () => {
  const links1 = [
    {
      text: "Overview",
      icon: FiShoppingBag,
    },
    {
      text: "Orders",
      icon: HiOutlineShoppingCart,
    },
    {
      text: "Customers",
      icon: GiSchoolBag,
    },
    {
      text: "Transactions",
      icon: IoWalletOutline,
    },
    {
      text: "Shipment",
      icon: RiTruckLine,
    },
  ];

  const links2 = [
    {
      text: "Help Centre",
      icon: BiHelpCircle,
    },
    {
      text: "Settings",
      icon: FiSettings,
    },
    {
      text: "Logout",
      icon: MdLogout,
    },
  ];
  return (
    <div className="sidebar">
      <div className="brand">Shop Sidebar</div>
      <div className="links"></div>
      <div className="pro">
        <div className="image">
          <img src={rocket} alt="" />
        </div>
        <h3>Shop Sidebar Pro</h3>
        <h5>Get access to all features on Shop</h5>
        <button>Get Pro</button>
      </div>
    </div>
  );
};

export default Sidebar;
