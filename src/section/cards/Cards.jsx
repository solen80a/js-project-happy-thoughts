import { useState } from "react";
import { MessageCard } from "../message-card/MessageCard"
import { CommentCard } from "../comment-card/CommentCard";
import moment from 'moment';

//#region --- FUNCTIONS ---
export const Cards = () => {

  const [userInput, setUserInput] = useState("")
  const [messages, setMessages] = useState([])
  const [maxCharacterMessage, setMaxCharacterMessage] = useState("")
  const [maxCharacterIndicator, setMaxCharacterIndicator] = useState(false)
  // const [CharacterCount, setCharacterCount] = useState(0)

  const submitHandler = (event) => {
    event.preventDefault();

    if (userInput.trim() === "") //The Trim takes away all the spaces
      return

    if (userInput.length >= 70) {
      setMaxCharacterMessage(`The limit is 70 characters. You entered ${userInput.length}.`)
      setMaxCharacterIndicator(true)
      return
    } else {
      setMaxCharacterMessage("")
      setMaxCharacterIndicator(false)
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
        maxCharacters={maxCharacterMessage}
        maxCharacterIndicator={maxCharacterIndicator}
      />

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