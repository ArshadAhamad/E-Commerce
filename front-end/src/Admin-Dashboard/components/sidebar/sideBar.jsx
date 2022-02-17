import "./sideBar.css";
import { Settings } from "@material-ui/icons";
import { Icon } from "@iconify/react";

import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="topLeft">
          <span className="logo">Gypzeez</span>
        </div>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/" className="link">
              <div className="img">
                <img
                  src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                  className="topAvatar"

                />
                <div>
                  <span className="spanImg">Elankumaran</span>
                  <br />
                  <span className="spanMail">siva98kumarane@gmail.com</span>
                </div>
              </div>
            </Link>
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <Icon
                  className="sidebarIcon"
                  icon="mdi:shield-account-outline"
                />
                Super Admin
              </li>
            </Link>
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <Icon id="admin" className="sidebarIcon" icon="mdi:account-star" />
                Admin
              </li>
            </Link>
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <Icon
                  className="sidebarIcon"
                  icon="mdi:account-details-outline"
                />
                Customer Service
              </li>
            </Link>
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <Icon className="sidebarIcon" icon="mdi:account-box-outline" />
                Accountent
              </li>
            </Link>
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <Icon
                  className="sidebarIcon"
                  icon="mdi:account-details-outline"
                />
                Content
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Settings className="sidebarIcon" />
              Settings
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
