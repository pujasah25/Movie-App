import "./widgetSm.css";
import { Visibility } from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from "axios";

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);
  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/users?new=true", {
          headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user) => (
          <li className="widgetSmListItem" key={user._id}>
            <img
              src={user.profilePic || "data:image/png;base64,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"}
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username} </span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
