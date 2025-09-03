import { useNavigate } from "react-router-dom"
import styled from "styled-components"

import { HappyFaceIcon } from "../components/icons/HappyFaceIcon"

//#region ---- STYLING ----
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
//#endregion

export const Header = (user) => {
  const navigate = useNavigate()

  console.log(user)

  const handleSignin = () => {
  console.log("You clicked signin")
  navigate("/usersignin"); // ← navigate to the route
  }

  const handleSignout = () => {
     // ADD Clear user data 
    localStorage.removeItem("user"); // Remove stored user object
    navigate("/"); // Redirect to login page
  }

  return(    
    <header>
      <HeaderWrapper>
        <h1>Happy Thoughts</h1>
    
        <ButtonWrapper>
          {user ? 
            <button onClick={handleSignin}>   
              <HappyFaceIcon />
            </button> 
          :            
            <button onClick={handleSignout}>      
              Logout
            </button>}
        </ButtonWrapper>
      </HeaderWrapper>          
    </header>
    

  )
}