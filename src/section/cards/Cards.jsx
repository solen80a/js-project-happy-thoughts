import { useState } from "react";
import { MessageCard } from "../message-card/MessageCard"
import { CommentCard } from "../comment-card/CommentCard";
import moment from 'moment';

//#region --- FUNCTIONS ---
export const Cards = () => {

  const [userInput, setUserInput] = useState("")
  const [messages, setMessages] = useState([])

  const submitHandler = (event) => {
    event.preventDefault();

    if (userInput.trim() === "") //The Trim takes away all the spaces
      return

    const newMessage = {
      id: Date.now(), // This will be a uniqe ID
      text: userInput.trim(),
      timestamp: moment().fromNow(),
      likes: 0,
    }

    setMessages((prev) => [newMessage, ...prev])
    setUserInput("")
  }

  //#endregion

  return (
    <>
      < MessageCard
        input={userInput}
        setInput={setUserInput}
        comment={submitHandler} />
      {messages.map((message) => (
        <>
          <CommentCard
            key={message.id}
            text={message.text}
            timestamp={message.timestamp} />

        </>
      ))}
    </>
  )
}