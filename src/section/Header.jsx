import { useNavigate } from "react-router-dom"
import styled from "styled-components"

import { HappyFaceIcon } from "../components/icons/HappyFaceIcon"
import { UserSignin } from "./UserSignin"

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  position: relative;  
  width: 50%;
`

export const Header = () => {
  const navigate = useNavigate()

  const handleSignin = () => {
  console.log("You clicked signin")
  navigate("/usersignin"); // ← navigate to the route
  }

  return(    
    <header>
    <h1>Happy Thoughts</h1>
    
    <ButtonWrapper>
      <button onClick={handleSignin}>      
        <HappyFaceIcon />
      </button>
    </ButtonWrapper>      
    </header>
    

  )
}