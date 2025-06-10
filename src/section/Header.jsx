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
      <UserIcon src="./assets/user.png" alt="User avatar"/>
    </button>
    </>
    

  )
}