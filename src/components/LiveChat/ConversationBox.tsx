type ConversationProps = {
  avatar: string
}
export const ConversationBox = ({avatar}: ConversationProps) => {
  return (
    <div className="h-[300px] overflow-y-auto">
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src={avatar} />
          </div>
        </div>
        <div className="chat-bubble bg-[#ECECEC] text-gray-700">You were the Chosen One!</div>
      </div>
      <div className="chat chat-end ">
        <div className="chat-bubble bg-[#E30019] text-white">I hate you!</div>
      </div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src={avatar} />
          </div>
        </div>
        <div className="chat-bubble bg-[#ECECEC] text-gray-700">You were the Chosen One!</div>
      </div>
      <div className="chat chat-end ">
        <div className="chat-bubble bg-[#E30019] text-white">I hate you!</div>
      </div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src={avatar} />
          </div>
        </div>
        <div className="chat-bubble bg-[#ECECEC] text-gray-700">You were the Chosen One!</div>
      </div>
      <div className="chat chat-end ">
        <div className="chat-bubble bg-[#E30019] text-white">I hate you!</div>
      </div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src={avatar} />
          </div>
        </div>
        <div className="chat-bubble bg-[#ECECEC] text-gray-700">You were the Chosen One!</div>
      </div>
      <div className="chat chat-end ">
        <div className="chat-bubble bg-[#E30019] text-white">I hate you!</div>
      </div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src={avatar} />
          </div>
        </div>
        <div className="chat-bubble bg-[#ECECEC] text-gray-700">You were the Chosen One!</div>
      </div>
      <div className="chat chat-end ">
        <div className="chat-bubble bg-[#E30019] text-white">I hate you!</div>
      </div>
      <div></div>
    </div>
  )
}
