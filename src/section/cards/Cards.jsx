import { useState } from "react";
import { MessageCard } from "../message-card/MessageCard"
import { CommentCard } from "../comment-card/CommentCard";
import moment from 'moment';

//#region --- FUNCTIONS ---
export const Cards = () => {

  const [userInput, setUserInput] = useState("")
  const [messages, setMessages] = useState([])
  const [MaxCharacterMessage, setMaxCharacterMessage] = useState("")
  // const [CharacterCount, setCharacterCount] = useState(0)

  const submitHandler = (event) => {
    event.preventDefault();

    if (userInput.trim() === "") //The Trim takes away all the spaces
      return

    if (userInput.length >= 10) {
      setMaxCharacterMessage(`The limit is 50 characters. You entered ${userInput.length}.`)
      return
    } else {
      setMaxCharacterMessage("")
    }



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
        comment={submitHandler}
        maxCharacters={MaxCharacterMessage} />
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