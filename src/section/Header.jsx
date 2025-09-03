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

export const Header = () => {
  const navigate = useNavigate()
  const storedUserId = localStorage.getItem("userId")
  const user = storedUserId ? { userId: storedUserId } : null

  const handleSignin = () => {
  
  navigate("/usersignin"); // ← navigate to the route
  }

  const handleSignout = () => {
    // Remove stored user, accessToken and userId
    localStorage.removeItem("user"); 
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
    navigate("/"); // Redirect to login page
  }

  return(    
    <header>
      <HeaderWrapper>
        <h1>Happy Thoughts</h1>
    
        <ButtonWrapper>
          {user ? 
            <button onClick={handleSignout}
              style={{
              backgroundColor: user ? "#f0aeae" : "#eeeeee" ,
              border: "none"
            }}>      
              Logout
            </button>            
          :  
            <button onClick={handleSignin}
              
            >   
              <HappyFaceIcon />
            </button> 
          }
        </ButtonWrapper>
      </HeaderWrapper>          
    </header>
    

  )
}