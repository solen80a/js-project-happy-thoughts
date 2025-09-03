import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import styled from "styled-components"

import { HappyFaceIconPlus } from "../components/icons/HappyFaceIconPlus"
import { SaveIcon } from "../components/icons/SaveIcon"

//#region ---- STYLING ----
const UserSigninWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  border: 1px solid #000;
  box-shadow: 10px 10px 0 rgba(0, 0, 0, 1);
  width: 280px;
  margin: 28px auto;
  padding: 12px 18px;
  gap: 12px;
  animation: ${({ isNewComment }) => (isNewComment ? 'popComment 0.6s ease-out forwards' : 'none')};

  @keyframes popComment {
    0% {
      opacity: 0;
      transform: translateY(-20px) scale(0.95);
    }
    60% {
      opacity: 1;
      transform: translateY(10px) scale(1.02);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @media (min-width: 640px) {
    width: 620px;    
  }

 

  form {
 
  padding: 2rem;
  max-width: 400px;
  margin: 2rem auto;
  
  }

  fieldset {
    border: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  label {
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  input {
    padding: 0.5rem;
    font-size: 1rem;
    
    width: 100%;
    box-sizing: border-box;
  }
`
//#endregion

export const UserSignin = () => {
  const navigate = useNavigate()

  const apiUrl = "https://js-project-api-afon.onrender.com/sessions"
  //const apiUrl = "http://localhost:8080/sessions" 

  const [formData, setFormData] = useState({
    username: "",
    password: "",    
  })

  const [error, setError] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
  
    
    const fail = () => toast.error("Username and/or password is incorrect, please try again.");     

    if(!formData.username.trim() || !formData.password.trim()){
      setError("Please fill in both username and password");
      return;    
    }   
   

    try {
    const response = await fetch(`${apiUrl}`, {
      method: "POST",
      body: JSON.stringify({ 
        email: formData.username, 
        password: formData.password 
      }),
      headers: {
        "Content-Type": "application/json"        
      },
      
    });
        
    const user = await response.json();
   

      if (user.success && user.userId){
        localStorage.setItem("accessToken", user.accessToken)
        localStorage.setItem("userId", user.userId);   
        localStorage.setItem("user", JSON.stringify(user));     

        toast.success("Login successful!"); 
              
        navigate("/", { state: { user } });

      } else {
        fail(); // Show toast error
        setError("Login failed. Please check your username and password.");
      }  
      
      event.target.reset();

  } catch(error){
    console.error("Signin error:", error);    
    fail();
  }}

  return(
    <section>
      <h1>Signin</h1>
      <UserSigninWrapper> 
        <form onSubmit={handleLogin}>
          {error && <div style={{color: "red"}}>{error}</div>}          
          <fieldset>          
            <div>
              <label htmlFor="username">Username</label>
              <input 
                onChange={(event) => setFormData({ 
                  ...formData, username: event.target.value})}
                type="email" 
                name="username" 
                id="username"
                value={formData.username} 
                placeholder="e.g., myusername@mail.com"/>
            </div>
            <div>
              <label htmlFor="password">Enter a password</label>
              <input
                onChange={(event => setFormData({ 
                  ...formData, password: event.target.value}))} 
                type="password" 
                name="password" 
                id="password" 
                value={formData.password}
                placeholder="password"
                />
            </div>
            <div>
              <button type="submit"><SaveIcon/></button>              
            </div>      
          </fieldset>          
        </form> 
        <ToastContainer/>
        <div>
           <p>Don't have an account?</p>
           <button 
            onClick={() => navigate('/usersignup')}
            >
              <HappyFaceIconPlus/>
           </button>
        </div>       
      </UserSigninWrapper>     
    </section>  
    
  )  
}