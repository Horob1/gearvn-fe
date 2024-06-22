import { useEffect, useState } from "react";
import { IoIosChatboxes } from "react-icons/io";
import ChatBox from "./ChatBox";
import { Socket, io } from "socket.io-client";

const LiveChatComponent = () => {
  const [socket, setSocket] = useState<Socket>();
  const [isUnSeen, setIsUnSeen] = useState(true);
  useEffect(() => {
    const newSocket: Socket = io(import.meta.env.VITE_API_BASE_URL);
    setSocket(newSocket);
    return () => {
      newSocket.disconnect();
    };
  }, []);
  useEffect(() => {
    if(socket==null) return;
    socket.emit("addNewUser")
    return () => {
    };
  }, [socket]);
  const [showChatbox, setShowChatbox] = useState(0)

  return (
    <div className="hidden md:block relative">
      <div
        onClick={() => {
          setShowChatbox(1);
          setIsUnSeen(false);
        }}
        className={`cursor-pointer fixed bottom-0 right-8 animate-goFromBottom py-1 pl-2 pr-6 rounded-t-md z-50 bg-[#E30019] ${
          showChatbox !== 1 ? "" : "hidden"
        }`}
      >
        <p className="flex gap-2 items-center text-white">
          <IoIosChatboxes className="text-xl"></IoIosChatboxes> Chat tư vấn hỗ
          trợ mọi thắc mắc
        </p>
        <div className="absolute p-6 rounded-full bg-red-700 -top-6 -left-6 animate-ping" style={{
          visibility: isUnSeen? "visible" : "hidden"
        }}></div>
      </div>
      {socket && (
        <ChatBox
          setIsUnSeen={setIsUnSeen}
          socket={socket}
          setShowChatbox={setShowChatbox}
          showChatbox={showChatbox}
        />
      )}
    </div>
  );
}

export default LiveChatComponent
