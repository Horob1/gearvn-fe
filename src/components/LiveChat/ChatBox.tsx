

type ChatBoxProps = {
  setShowChatbox: React.Dispatch<React.SetStateAction<number>>,
  showChatbox: number
}

const ChatBox = ({setShowChatbox,showChatbox}: ChatBoxProps) => {

  return (
    <div onClick={()=> setShowChatbox(2)}
        className={`fixed bottom-0 w-[500px] h-[500px] left-10 bg-black right-10 ${showChatbox===0 ? 'bottom-[-500px]' : showChatbox===1 ? 'animate-goFromBottom' : 'animate-leftToBottom' }`}>
    </div>
  )
}

export default ChatBox
