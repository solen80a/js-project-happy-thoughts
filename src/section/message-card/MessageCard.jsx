import { useState } from "react";
import styled from "styled-components";

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
height: 40px;
width: 100%;
padding: 10px 20px;
}

button {
  background-color: pink;
  border-radius: 50px;
  width: 75%;
  border: none;
  padding: 12px;
  margin: 12px 0;

  &:hover {
  background-color: #f0aeae;
  }
}

@media (min-width: 640px) {
width: 620px;

}
`

// export const MessageData = () => {

//   let message = [
//     {
//       id: 0,
//       text: "",
//       timestamp: "",
//       likes: 0
//     }
//   ]

// }

export const MessageCard = () => {

  const [text, setText] = useState("")

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <MessageCardWrapper>
        <p>What´s making you happy right now?</p>
        {/* <legend>What´s making you happy right now?</legend> */}
        <label>
          {/* What´s making you happy right now? */}
          <input
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Wright something happy!"
          />
        </label>
        <button type="submit">❤️ Send Happy Thoughts ❤️</button>
      </MessageCardWrapper>

    </form >


  )
}

