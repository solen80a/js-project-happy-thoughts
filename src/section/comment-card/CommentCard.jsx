import { useState } from "react";
import styled from "styled-components";

//#region ---- STYLING ----

const CommentCardWrapper = styled.div`
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

  p {
   overflow-wrap: break-word;
  }

  button {
    background-color: #eeeeee;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    transition: ease .3s;

    &:hover {
      background-color: #f0aeae;
      transform: scale(1.03);
    }

    &:active {
     box-shadow: inset 0 6px 12px rgba(0, 0, 0, 0.15),
                inset 0 3px 6px rgba(0, 0, 0, 0.10);
      background-color: #de8080;
}

    &.like-color.on {
      background-color: pink;
      border-radius: 50%;
      animation: pulse .7s;
      }

      @keyframes pulse {
        0% {
          transform: scale(1);
         
        }
        30% {
          transform: scale(1.3);
        }
        50% {
          transform: scale(0.9);
        }
        70% {
          transform: scale(1.1);
        }
        100% {
          transform: scale(1);
        }

    }

    .like-color.off {
      background-color: #eeeeee;}
    }
  `

const CommentCardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

`  

const CommentCardFooter = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    p {
      color: grey;      
    }

    div {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      gap: 10px;
    }
  `

//#endregion

//#region ---- FUNCTIONS ----

export const CommentCard = ({ text,
  timestamp,
  likes,
  liked,
  isNewComment,
  id,
  apiNewId,
  setMessages,
  setRecentComments
}) => {

  const apiUrl = "http://localhost:8080/thoughts"

  const [isButtonDisabled, setIsButtonDisabled] = useState(false)

  //#region ---- likeHandeler ----
  const likeHandeler = (id,
    setMessages,
    setRecentComments,
    apiNewId) => {

    setIsButtonDisabled(true)

    if (setMessages) {
      console.log("setmessage")
      setMessages((prevMessages) =>
        prevMessages.map((message) =>
          message.id === id
            ? {
              ...message,
              liked: !message.liked,
              likes: message.likes + 1,
            }
            : message
        )
      );
      
    }
    if (setRecentComments) {
      console.log("setRecentComments")
      setRecentComments((prevMessages) =>
        prevMessages.map((message) =>
          message.id === id
            ? {
              ...message,
              liked: !message.liked,
              likes: message.likes + 1,
            }
            : message
        )
      );
    }
    if (apiNewId && apiNewId !== id) {
      //https://happy-thoughts-api-4ful.onrender.com/thoughts/${apiNewId}/like
      fetch(`${apiUrl}/${apiNewId}/like`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    fetch(`${apiUrl}/${id}/like`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  //#endregion ---- likeHandeler ----
  //#region ---- deleteHandeler ----
  const deleteHandeler = (id) => {
    if (setMessages) {      
      setMessages((prevMessages) =>
        prevMessages.filter((message) => message.id !== id)            
      )      
    }
    if (setRecentComments) {
      setRecentComments((prevMessages) =>
        prevMessages.filter((message) => message.id !== id)
        )     
    }
    fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  //#endregion ---- deleteHandeler ----
  //#region ---- editHandeler ----

  //#endregion ---- editHandeler ----
  // const editHandeler = (id) => {
  //   if (setMessages) {

  //   }
  //   if (setRecentComments){

  //   }


  //   fetch(`${apiUrl}/${id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  // }

  //#endregion

  return (
    <CommentCardWrapper isNewComment={isNewComment}>
      
      <CommentCardHeader>
        <p>{text}</p>
        <div>
          <button> 
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
             <path d="M4 21h4l11.293-11.293a1 1 0 0 0 0-1.414l-2.586-2.586a1 1 0 0 0-1.414 0L4 17v4zm14.707-13.707-2.586-2.586L17 3.414l2.586 2.586-0.879 0.879z"/>
            </svg>
          </button>
          <button
            onClick={() => deleteHandeler(id, apiNewId)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 3V4H4V6H5V19C5 20.105 5.895 21 7 21H17C18.105 21 19 20.105 19 19V6H20V4H15V3H9zM7 6H17V19H7V6z"/>
            </svg>
          </button>          
        </div>       
      </CommentCardHeader> 
      <CommentCardFooter>
        <div>
          <button
            disabled={isButtonDisabled}
            className={`like-color ${liked ? "on" : "off"}`}
            onClick={() => likeHandeler(id, setMessages, setRecentComments, apiNewId)}
          >❤️</button>
          <p>x {likes}</p>          
        </div>
        <p>{timestamp}</p>
      </CommentCardFooter>
    </CommentCardWrapper>


  )
}