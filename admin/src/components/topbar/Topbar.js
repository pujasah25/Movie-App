import { Button } from "@mui/material";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Myadmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?cs=srgb&dl=pexels-juliana-stein-1898555.jpg&fm=jpg"
            alt=""
            className="topAvatar"
          />
          <Button>Logout</Button>
        </div>
      </div>
    </div>
  );
}

