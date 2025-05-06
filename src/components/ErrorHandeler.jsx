import { useState } from "react";
import styled from "styled-components";

const ErrorMessage = styled.p`
/* color: ${(props) => (props.maxCharacterIndicator ? "red" : "black")}; */
text-align: right;
margin: 0;
padding: 0;
max-width: 150px;
`

export const ErrorHandeler = ( {userInput} ) => {

const [maxCharacterMessage, setMaxCharacterMessage] = useState("")
//const [maxCharacterIndicator, setMaxCharacterIndicator] = useState(false)
//const [value, setValue] = useState(""); 

//let maxCharacterMessage = "hejhej" 
// let maxCharacterIndicator =

const handleChange = (e) => {userInput(e.target.value); 


  if (userInput.length < 5) {
    maxCharacterMessage(`: You need to enter more then 5 characters!`)
    // setMaxCharacterIndicator(true)
    return
  } 
  else if (userInput.length > 140) {
    maxCharacterMessage(`: You entered to many characters!`)
    // setMaxCharacterIndicator(true)
    return
  } 
  else if (userInput.length > 5 && userInput.length < 141) {
    maxCharacterMessage("")
    // setMaxCharacterIndicator(false)
  }
} 

  return(
    <ErrorMessage handleChange={handleChange}>
      
      {userInput.length}/70 {maxCharacterMessage}
      
    
    </ErrorMessage>
  )
}