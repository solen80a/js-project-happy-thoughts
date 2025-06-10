import styled from "styled-components"

import { Title } from "../styling/Typography"

const UserIcon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid #E57C00;
`

const handleSignin = () => {
  console.log("You clicked signin")
}


export const Header = () => {
  return(
    <>
    <Title>Happy Thoughts</Title>
    <button onClick={handleSignin}>      
      <svg width="20" height="20" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="55" fill="#f0aeae" stroke="#333" strokeWidth="4"/>
      <circle cx="45" cy="50" r="5" fill="#333"/>
      <circle cx="75" cy="50" r="5" fill="#333"/>
      <path d="M 45 75 Q 60 90, 75 75" stroke="#333" strokeWidth="4" fill="none" strokeLinecap="round"/>    
      </svg>
    </button>
    </>
    

  )
}