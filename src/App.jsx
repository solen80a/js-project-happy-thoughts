import { MessageCard } from "./section/message-card/MessageCard"
import {useState} from "react";
import { CommentCard } from "./section/comment-card/CommentCard";
import moment from 'moment';

export const App = () => {
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


  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Happy Thoughts</h1>
      {/* <Header /> */}
      < MessageCard input={userInput} setInput={setUserInput} comment={submitHandler}/>
      {messages.map((message) => (
        <>     
           <CommentCard
            key={message.id}
            text={message.text}
            timestamp={message.timestamp} /> 
                   
        </>
      ))}
      {/* <Footer/> */}
    </>
  )
}

