import { useNavigate } from "react-router-dom"
import styled from "styled-components"

import { HappyFaceIcon } from "../components/icons/HappyFaceIcon"

const HeaderWrapper = styled.div`
  width: 280px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

   @media (min-width: 640px) {   
    width: 620px;
  }
`

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
      <HeaderWrapper>
        <h1>Happy Thoughts</h1>
    
        <ButtonWrapper>
          <button onClick={handleSignin}>      
            <HappyFaceIcon />
          </button>
        </ButtonWrapper>
      </HeaderWrapper>          
    </header>
    

  )
}