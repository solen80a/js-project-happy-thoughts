import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";

import { SaveIcon } from "../components/icons/SaveIcon";

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

export const UserSignup = () => {
  const navigate = useNavigate()

  const apiUrl = "https://js-project-api-afon.onrender.com/users"
  //const apiUrl = "http://localhost:8080/users"

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.username.value;
    const password = event.target.password.value;

    //const success = () => toast.success("Signup successful");
    const fail = () => toast.error("Something went wrong, please try again"); 

  try {
    const response = await fetch(`${apiUrl}`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json"
      },
    });
        
      if(!response.ok){
          throw new Error("API error");
        }
        // Reset form
        event.target.reset();
        // Notify parent component
        console.log("API response:", await response.json());
        //success();
        navigate("/");

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