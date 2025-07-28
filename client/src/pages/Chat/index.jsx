import React from "react";
import Chat_box from "./components/Chat_box";

const Chat = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full bg-white p-4 rounded-lg shadow-md">
        <Chat_box />
      </div>
    </div>
  );
};

export default Chat;
