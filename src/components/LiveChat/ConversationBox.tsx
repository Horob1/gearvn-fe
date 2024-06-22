import { useEffect, useRef, useState } from "react";
import { Socket } from "socket.io-client";
export type MessageType = {
  position: string;
  message: string;
};
type ConversationProps = {
  avatar: string;
  socket: Socket;
  setIsUnSeen: React.Dispatch<React.SetStateAction<boolean>>;
};
export const ConversationBox = ({
  avatar,
  socket,
  setIsUnSeen,
}: ConversationProps) => {
  const lastMessage = useRef<HTMLDivElement>(document.createElement("div"));
  const [messages, setMessages] = useState<MessageType[]>([
    {
      position: "end",
      message: "Chào bạn GearVN có thể giúp gì cho bạn ạ!",
    },
  ]);

  useEffect(() => {
    lastMessage.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (socket == null) return;
    socket.on("receiveMessage", (message: MessageType) => {
      if (message.position === "end") setIsUnSeen(true);
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  }, [socket, setIsUnSeen]);

  return (
    <div className="h-[300px] flex flex-col">
      <div className="flex-1"></div>
      <div className="overflow-y-auto">
        {messages.map((message) =>
          message.position === "end" ? (
            <div
              key={`${Math.random()}-${Date.now()}-${message.position}-${
                message.message
              }`}
              className="chat chat-start"
            >
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS chat bubble component" src={avatar} />
                </div>
              </div>
              <div className="chat-bubble bg-[#ECECEC] text-gray-700">
                {message.message}
              </div>
            </div>
          ) : (
            <div
              key={`${Math.random()}-${Date.now()}-${message.position}-${
                message.message
              }`}
              className="chat chat-end "
            >
              <div className="chat-bubble bg-[#E30019] text-white">
                {message.message}
              </div>
            </div>
          )
        )}
      </div>

      <div ref={lastMessage}></div>
    </div>
  );
};
