import avatar from "./../../assets/avatar.png";
import { IoSend } from "react-icons/io5";
import { ConversationBox } from "./ConversationBox";

import "./chatbox.css";
import { Socket } from "socket.io-client";
import { useState } from "react";
import toast from "react-hot-toast";
type ChatBoxProps = {
  setShowChatbox: React.Dispatch<React.SetStateAction<number>>;
  showChatbox: number;
  socket: Socket;
  setIsUnSeen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ChatBox = ({
  setShowChatbox,
  socket,
  showChatbox,
  setIsUnSeen,
}: ChatBoxProps) => {
  const [message, setMessage] = useState<string>("");
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    if (socket == null) return;
    if (message.trim() === "") alert(1);
    const newMessage = {
      userId: socket.id,
      content: message,
      position: "start",
    };
    try {
      socket.emit("sendMessage", newMessage);
    } catch (error) {
      toast.error("Lỗi kết nối đến server");
    }
    setMessage("");
  };

  return (
    <div
      className={`fixed z-50 chat-box bottom-0 w-[300px] h-[500px] right-8 ${
        showChatbox === 0
          ? "bottom-[-500px]"
          : showChatbox === 1
          ? "animate-goFromBottom"
          : "animate-leftToBottom"
      }`}
    >
      <div className="w-[300px] bg-white rounded-md shadow-2xl">
        <div className="w-full p-4 rounded-t-md flex items-center justify-between bg-[#E30019]">
          <div className="flex gap-4 items-center">
            <div className="avatar">
              <div className="w-8 h-8 rounded-full">
                <img src={avatar} className="" />
              </div>
            </div>
            <div>
              <p className="text-white">GearVN</p>
              <p className="text-gray-300 leading-3 font-normal">
                Trò chuyện với chúng tôi
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowChatbox(2)}
            className="text-white hover:bg-red-700  px-[5.5px] rounded-full"
          >
            ✕
          </button>
        </div>
        <div className="pl-2">
          {socket && (
            <ConversationBox
              setIsUnSeen={setIsUnSeen}
              socket={socket}
              avatar={avatar}
            />
          )}
        </div>
        <div className="p-4 border-t-2">
          <form className="relative flex" onSubmit={handleSendMessage}>
            <input
              type="text"
              required
              onClick={() => setIsUnSeen(false)}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Bạn cần tìm gì?"
              className="py-2 px-2 focus:outline-none text-gray-700 font-medium rounded-md pr-12 "
            />
            <button
              type="submit"
              className="absolute top-1/2 -translate-y-1/2 right-4"
            >
              <IoSend className="text-xl hover:text-gray-700" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
