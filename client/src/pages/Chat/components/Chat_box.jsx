import { Icon } from "@iconify/react/dist/iconify.js";
import React, { use, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
import { appContext } from "../../../App";
import { doc, updateDoc } from "@firebase/firestore";
import { firestore } from "../../../../firebase";

const Chat_box = () => {
  const { userData, uid } = useContext(appContext);
  const [chat, setChat] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (userData?.chathistory) {
      setChat(userData.chathistory);
    }
  }, [userData]);

  const uploadChatHistory = (newchat) => {
    if (userData) {
      console.log(111);
      updateDoc(doc(firestore, "user", uid), {
        chathistory: newchat,
      });
      console.log(newchat);
    }
  };

  const sendMessage = async () => {
    console.log(chat);
    if (!message.trim()) return;

    const newUserMessage = { role: "user", content: message };
    const updatedChat = [...chat, newUserMessage];
    setChat(updatedChat);
    setMessage("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:3000/ai/chat", {
        messages: updatedChat, // 注意是 array
        user: userData,
      });
      const reply = res.data.reply;
      const CurrentNew = [
        ...updatedChat,
        { role: "assistant", content: reply },
      ];
      setChat([...updatedChat, { role: "assistant", content: reply }]);
      uploadChatHistory(CurrentNew);
    } catch (error) {
      console.error("❌ 前端发送出错:", error);
      alert("AI 请求失败，请检查控制台");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-full p-2 flex flex-col justify-between">
      <main className="w-full h-[90%] overflow-auto gap-2 flex flex-col p-2">
        {chat.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg max-w-full ${
              msg.role === "user"
                ? "bg-blue-100 self-end text-right"
                : "bg-gray-200 self-start text-left"
            }`}
          >
            {msg.content}
          </div>
        ))}
      </main>
      <div className="h-[10%] w-full ">
        <div className="w-full rounded-lg flex flex-row items-center justify-center bg-gray-100 h-full p-3">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="outline-none w-[90%] h-full p-3"
          />
          <button
            onClick={() => sendMessage()}
            className="flex flex-row gap-2 w-[10%] items-center hover:gap-5 hover:bg-[#4BC0C0] hover:text-white transition-all justify-center rounded-lg border-2 border-[#4BC0C0] font-semibold  h-full text-[#4BC0C0]"
          >
            send
            <Icon icon="material-symbols:send" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat_box;
