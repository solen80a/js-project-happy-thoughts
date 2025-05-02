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
      setMaxCharacterMessage(`: You entered to many characters!`)
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
      liked: false,
    }

    setMessages((prev) => [newMessage, ...prev])
    setUserInput("")
  }

  const likeHandeler = (id) => {
    setMessages((prevMessages) =>
      prevMessages.map((message) =>
        message.id === id
          ? {
              ...message,
              liked: !message.liked,
              likes: message.liked ? message.likes - 1 : message.likes + 1,
            }
          : message
      )
    );
  };

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
            timestamp={message.timestamp}
            likes={message.likes}
            liked={message.liked}
            likeHandeler={() => likeHandeler(message.id)}
             />          

        </>
      ))}
    </>
  )
}