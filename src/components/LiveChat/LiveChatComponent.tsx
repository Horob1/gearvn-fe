import { useState } from "react";
import { IoIosChatboxes } from "react-icons/io";
import ChatBox from "./ChatBox";

const LiveChatComponent = () => {
  const [showChatbox, setShowChatbox] = useState(0)

  return (
    <div className="hidden md:block ">
      <div onClick={()=> setShowChatbox(1)}
        className={`cursor-pointer fixed bottom-0 right-10 animate-goFromBottom py-1 pl-2 pr-6 rounded-t-md bg-[#E30019] ${showChatbox!==1 ?'':'hidden'}`}>
        <p className="flex gap-2 items-center text-white"><IoIosChatboxes className="text-xl"></IoIosChatboxes> Chat tư vấn hỗ trợ mọi thắc mắc</p>
      </div>
      <ChatBox  setShowChatbox={setShowChatbox} showChatbox={showChatbox}/>
    </div>
  )
}

export default LiveChatComponent
