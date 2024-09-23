import { useChat } from "@/contexts/ChatContext"
import { useUser } from "@/contexts/UserContext"

export const ChatMessages = () => {
  const chatCtx = useChat()
  const userCtx = useUser()

  return (
    <div className="flex flex-col gap-2">
      {chatCtx?.chat.map((item) => (
        <div
          key={item.id}
          className={`
            border border-white/20 rounded-md p-2 text-sm min-w-24
            ${item.user === userCtx?.user ?
              'self-end bg-green-900 text-right' :
              'self-start bg-white/5 text-left'}
          `}
        >
          <div className="font-bold">{item.user}</div>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  )
}