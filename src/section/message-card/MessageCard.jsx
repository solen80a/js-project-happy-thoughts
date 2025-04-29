import { useState } from "react";
import styled from "styled-components";

const MessageCardWrapper = styled.fieldset`
display: flex;
flex-direction: column;
justify-content: center;
background-color: #f5f5f5;
border: 1px solid black;
width: 320px;
margin: 0 auto;
padding: 8px;
gap: 10px;

input {
height: 40px;
width: 90%;
}

button {
  background-color: pink;
  border-radius: 50px;
  width: 65%;
  border: none;
  padding: 10px;

  &:hover {
  background-color: red;
}
}


`

export const MessageData = () => {

  let message = [
    {
      id: 0,
      text: "",
      timestamp: "",
      likes: 0    
    }
  ]
  
}

export const MessageCard = () => {

const [text, setText] = useState("")

  return (
    <form onSubmit={(event) => event.preventDefault()}>
    <MessageCardWrapper>
        <legend>What´s making you happy right now?</legend>
        <label>
        <input 
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Wright something happy!"
        />
        </label>
        <button type="submit">❤️ Send Happy Thoughts ❤️</button>        
        </MessageCardWrapper>
      
    </form>


  )
}

