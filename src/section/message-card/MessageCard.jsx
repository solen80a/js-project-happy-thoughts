import { useState } from "react";
import styled from "styled-components";
import { CommentCard } from "../comment-card/CommentCard";
import moment from 'moment';


//#region --- Styling ---

const MessageCardWrapper = styled.fieldset`
display: flex;
flex-direction: column;
justify-content: center;
background-color: #eeeeee;
border: 1px solid black;
border-radius: 2px;
width: 320px;
margin: 0 auto;
padding: 12px 18px;
gap: 12px;
box-shadow: 10px 10px 0 rgba(0, 0, 0, 1);

input {
height: 80px;
width: 100%;
padding: 10px 20px;
cursor: pointer;
padding-bottom: 35px;
}

button {
  background-color: pink;
  border-radius: 50px;
  width: 75%;
  border: none;
  padding: 12px;
  margin: 12px 0;
  cursor: pointer;
  transition: ease .3s;

  &:hover {
  background-color: #f0aeae;
  transform: scale(1.03);
  }
}

@media (min-width: 640px) {
width: 620px;

}
`
//#endregion


export const MessageCard = ({input, setInput, comment}) => {

  const handleSubmit = (event) => {
    comment(event, input);
  };

  // const [userInput, setUserInput] = useState("")
  //const [messages, setMessages] = useState([])

  // const submitHandler = (event) => {
  //   event.preventDefault();

  //   if (userInput.trim() === "") //The Trim takes away all the spaces
  //     return

  //   const newMessage = {
  //     id: Date.now(), // This will be a uniqe ID
  //     text: userInput.trim(),      
  //     timestamp: moment().fromNow(),
  //     likes: 0,
  //   }

  //   setMessages((prev) => [newMessage, ...prev])
  //   setUserInput("")
  // }

  return (
    <>
      {/* <form onSubmit={(event) => event.preventDefault()}> */}
      <form onSubmit={handleSubmit}>
        <MessageCardWrapper>
          <p>What´s making you happy right now?</p>
          {/* <legend>What´s making you happy right now?</legend> */}
          <label>
            {/* What´s making you happy right now? */}
            <input
              type="text"
              // value={userInput}
              value={input}
              // onChange={(event) => setUserInput(event.target.value)}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Wright something happy!"
            />
          </label>
          {/* <button type="submit" onClick={submitHandler}>❤️ Send Happy Thoughts ❤️</button> */}
          <button type="submit" onClick={comment}>❤️ Send Happy Thoughts ❤️</button>
        </MessageCardWrapper>

      </form >
      

      {/* {messages.map((message) => (
        <>
          <CommentCard
            key={message.id}
            text={message.text}
            timestamp={message.timestamp}>
          </CommentCard>
        </>
      ))} */}

    </>

  )
}
