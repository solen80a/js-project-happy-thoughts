import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";

import { ErrorHandeler } from "../../components/ErrorHandeler";
import { HappyFaceIcon } from "../../components/icons/HappyFaceIcon";
import { HappyFaceWarnIcon } from "../../components/icons/HappyFaceWarnIcon";

//#region ---- STYLING ----

const MessageCardWrapper = styled.fieldset`
display: flex;
flex-direction: column;
justify-content: center;
background-color: #eeeeee;
border: 1px solid black;
border-radius: 2px;
width: 280px;
margin: 0 auto;
padding: 12px 18px;
gap: 12px;
box-shadow: 10px 10px 0 rgba(0, 0, 0, 1);

textarea {
height: 80px;
width: 100%;
padding: 10px 20px;
cursor: pointer;
padding-bottom: 35px;
}

button {
  background-color: pink;
  border-radius: 50px;
  width: 75%;
  border: none;
  padding: 12px;
  margin: 12px 0;
  cursor: pointer;
  transition: ease .3s;

  &:hover {
  background-color: #f0aeae;
  transform: scale(1.03);
  }
}

@media (min-width: 640px) {
width: 620px;
}
`

const ExtraWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`

//#endregion

//#region ---- FUNCTIONS ----

export const MessageCard = ({ userInput, setUserInput, comment, setApiNewId }) => {

  const accessToken = localStorage.getItem("accessToken");
  const apiUrl = "https://js-project-api-afon.onrender.com/thoughts"
  //const apiUrl = "http://localhost:8080/thoughts"

  useEffect(() => {
    if(!accessToken) {
      toast.info("Please log in to post a happy thought.", {
        icon: HappyFaceIcon
      })
    } else {       
      toast.success("Welcome to post some thoughts, you are logged in", {
        icon: HappyFaceIcon
      }); 
    }

  }, [accessToken])

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(!accessToken) {
      toast.warning("You need to log in to post thoughts.", {
        icon: HappyFaceWarnIcon
      })
      return
    }

    try {
      const response = await fetch(`${apiUrl}`, {
      method: "POST",
      body: JSON.stringify({
        message: userInput,
      }),
      headers: { 
        "Content-Type": "application/json", 
        "Authorization": localStorage.getItem("accessToken")
      },      
    })
    
    const data = await response.json()

    if (!response.ok){
      toast.error(data.error || "Something went wrong. Please try again.", {
        icon: HappyFaceWarnIcon
      })
      return
    }
      setApiNewId(data._id)
      comment(event, userInput)
    } catch (error) {
      toast.error("Network error — could not post thought.", {
        icon: HappyFaceWarnIcon
      })
      console.error("API error:", error)
    }   
  };

  const EnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey == false) { //keyCode 13 is the enter key
      e.preventDefault();
      handleSubmit(e); // Submit when Enter is pressed       
    }
  }

  //#endregion  

  return (
    <>
      <ToastContainer/>
      <section>
        <form
          onSubmit={handleSubmit}>
          <MessageCardWrapper>
            <p>What´s making you happy right now?</p>
            <label>
              <textarea
                maxLength={140}
                value={userInput}
                onChange={(event) => setUserInput(event.target.value)}
                placeholder="Write something happy!"
                onKeyDown={EnterPress}
              ></textarea>
            </label>
            <ExtraWrapper>
              <button
                type="submit"
                disabled={userInput.trim().length <= 5 || userInput.trim().length >= 141}
              >
                ❤️ Send Happy Thoughts ❤️</button>
              <ErrorHandeler userInput={userInput} setUserInput={setUserInput} />
            </ExtraWrapper>
          </MessageCardWrapper>

        </form >
      </section>
      



    </>

  )
}
