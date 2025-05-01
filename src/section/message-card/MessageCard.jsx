import styled from "styled-components";

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


export const MessageCard = ({ input, setInput, comment, maxCharacters }) => {

  const handleSubmit = (event) => {
    comment(event, input);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}>
        <MessageCardWrapper>
          <p>What´s making you happy right now?</p>
          <label>
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Wright something happy!"
            />
          </label>
          <p>{maxCharacters}</p>
          <button type="submit" onClick={comment}>❤️ Send Happy Thoughts ❤️</button>
        </MessageCardWrapper>

      </form >



    </>

  )
}
