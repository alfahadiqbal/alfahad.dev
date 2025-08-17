import { useEffect, useState } from "react";
import { Badge } from "react-bootstrap";
import { io } from "socket.io-client";
import { FaUserFriends, FaCircle } from "react-icons/fa";

// Connect React app to NestJS backend
// https://alfa-be-hgkv.onrender.com
const socket = io("https://api.alfahad.dev/"); 

export default function ConnectedUsers() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Listen for "userCount" event from backend
    socket.on("userCount", (newCount) => {
      setCount(newCount); // update state
    });

    // Cleanup: disconnect socket when component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div
      className="d-flex align-items-center gap-2 px-2 py-1 rounded-pill"
      style={{
        background: "linear-gradient(to right, #198754, #20c997)",
        color: "white",
        fontSize: "0.85rem",
      }}
    >
      <FaCircle size={8} color="lime" />
      <FaUserFriends size={16} />
      <span>{count} Available</span>
    </div>

  );
}
