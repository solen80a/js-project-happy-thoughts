import { useNavigate } from "react-router-dom"
import styled from "styled-components"

import { HappyFaceIcon } from "../components/icons/HappyFaceIcon"
import { HappyFaceLogoutIcon } from "../components/icons/HappyFaceLogoutIcon"

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
    navigate("/usersignin"); // Redirect to login page
  }

  return(    
    <header>
      <HeaderWrapper>
        <h1>Happy Thoughts</h1>
    
        
          {user ? 
          <ButtonWrapper>
            <button onClick={handleSignout}
              style={{
              backgroundColor: user ? "#f0aeae" : "#eeeeee" ,
              border: "none"
            }}>      
              
              <HappyFaceLogoutIcon/>
            </button> 
            Logout
          </ButtonWrapper>           
          :  
          <ButtonWrapper>
            <button onClick={handleSignin}
              
            >   
              <HappyFaceIcon />
            </button> 
          Login
          </ButtonWrapper>
          }     
      </HeaderWrapper>          
    </header>
    

  )
}