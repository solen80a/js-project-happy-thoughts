import styled from "styled-components";

//#region ---- STYLING ----

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


/* input {
border: solid 2px ${(props) => (props.maxCharacterIndicator ? "red" : "white")};
height: 80px;
width: 100%;
padding: 10px 20px;
cursor: pointer;
padding-bottom: 35px;
} */

textarea {
border: solid 2px ${(props) => (props.maxCharacterIndicator ? "red" : "white")};
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

const ErrorMessage = styled.p`
color: ${(props) => (props.maxCharacterIndicator ? "red" : "black")};
text-align: right;
margin: 0;
padding: 0;
max-width: 150px;
`

const ExtraWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`

//#endregion

//#region ---- FUNCTIONS ----

export const MessageCard = ({ input, setInput, comment, maxCharacters, maxCharacterIndicator }) => {

  const handleSubmit = (event) => {
    comment(event, input);
  };

  //#endregion

  const EnterPress = (e) => {
      if (e.keyCode === 13 && e.shiftKey == false) { //keyCode 13 is the enter key
        e.preventDefault(); 
        handleSubmit(e); // Submit when Enter is pressed       
      }}

  return (
    <>
      <form
        onSubmit={handleSubmit}>
        <MessageCardWrapper maxCharacterIndicator={maxCharacterIndicator}>
          <p>What´s making you happy right now?</p>
          <label>      
            <textarea
              //maxLength={100}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Write something happy!"
              onKeyDown={EnterPress}
            ></textarea>
          </label>
          <ExtraWrapper>
            <button 
              type="submit" 
              // Submit disabled if less the 5 or more then 140 characters are added
              disabled={input.length <= 5 || input.length >= 141}
              >
                ❤️ Send Happy Thoughts ❤️</button>
            <ErrorMessage maxCharacterIndicator={maxCharacterIndicator}>{input.length}/70{maxCharacters}</ErrorMessage>
          </ExtraWrapper>
        </MessageCardWrapper>

      </form >



    </>

  )
}
