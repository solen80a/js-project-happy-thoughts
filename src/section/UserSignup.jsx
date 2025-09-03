import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";

import { SaveIcon } from "../components/icons/SaveIcon";

//#region ---- STYLING ----
const UserSignupWrapper = styled.div`
  display: flex;
  flex-direction: row;
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

export const UserSignup = () => {
  const navigate = useNavigate()

  //const apiUrl = "https://js-project-api-afon.onrender.com"
  const apiUrl = "http://localhost:8080"

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const email = event.target.username.value;
    // const password = event.target.password.value;   

    const fail = () => toast.error("Something went wrong, please try again"); 

  try {
    const response = await fetch(`${apiUrl}/users`, {
      method: "POST",
      //body: JSON.stringify({ email, password }),
      body: JSON.stringify({ 
        email: formData.username.trim(), 
        password: formData.password.trim() 
      }),  
      headers: {
        "Content-Type": "application/json"
      },
    });

    const user = await response.json();
    console.log("Signup response:", response.status, user);

    if (response.ok){    

      // Auto-login after successful signup
      const loginRes = await fetch(`${apiUrl}/sessions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.username,
          password: formData.password,
        }),        
      });

      const loginData = await loginRes.json();
      
      if (loginData.success && loginData.userId) {
        localStorage.setItem("accessToken", loginData.accessToken)
        localStorage.setItem("userId", loginData.userId);
        localStorage.setItem("user", JSON.stringify(loginData));

        toast.success("Login successful!");

        console.log("API response:", loginData);
      
        navigate("/", { state: { loginData } });
      } else {
        setError("Signup succeeded, but login failed");
        navigate("/usersignin");
      }

    } else{
      //throw new Error("API error");
      fail(); // Show toast error
      setError(user.message || "Signup failed");
    }
    // Reset form
    event.target.reset();  
        

  }catch(error){
    console.error("Signup error:", error);
    fail();
  }
};
  return (
    <section>
      <h1>SIGN UP</h1>
      <UserSignupWrapper>
        <form onSubmit={handleSubmit}>
          {error && <div style={{color: "red"}}>{error}</div>}  

          <label htmlFor="username">Username</label>
          <input
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            type="email"
            name="username"
            id="username"
            placeholder="e.g., myusername@mail.com"
          />
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
          <button type="submit">
            <SaveIcon/>
          </button>
        </form>
        <ToastContainer/>
        
      </UserSignupWrapper>
    </section>
    
    
  )
}