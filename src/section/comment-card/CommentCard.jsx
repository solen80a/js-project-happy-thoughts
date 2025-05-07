import styled from "styled-components";

//#region ---- STYLING ----

const CommentCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  border: 1px solid #000;
  box-shadow: 10px 10px 0 rgba(0, 0, 0, 1);
  width: 320px;
  margin: 28px auto;
  padding: 12px 18px;
  gap: 12px;
  animation: ${({ isNewComment }) => (isNewComment ? 'popComment 0.6s ease-out forwards' : 'none')};

  @keyframes popComment {
    0% {
      transform: scale(0.5);
      opacity: 0;
    }
    50% {
      transform: scale(1.15);
      opacity: 1;
    }
    70% {
      transform: scale(0.94);
    }
    100% {
      transform: scale(1);
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
      background-color: #eeeeee;
}
    }
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

const likeHandeler = (id, setMessages, setRecentComments) => {


  if (setMessages) {
    console.log("testing")
    setMessages((prevMessages) =>
      prevMessages.map((message) =>
        message.id === id
          ? {
            ...message,
            liked: !message.liked,
            likes: message.liked ? message.likes - 1 : message.likes + 1,
          }
          : message
      )
    );
  }
  if (setRecentComments) {
    console.log("testing")
    setRecentComments((prevMessages) =>
      prevMessages.map((message) =>
        message.id === id
          ? {
            ...message,
            liked: !message.liked,
            likes: message.liked ? message.likes - 1 : message.likes + 1,
          }
          : message
      )
    );
  }


  fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${id}/like`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
};

//#endregion

export const CommentCard = ({ text, 
  timestamp, 
  likes, 
  liked, 
  isNewComment,
  id, 
  setMessages, 
  setRecentComments  
}) => {


  return (
    <CommentCardWrapper isNewComment={isNewComment}>
      <p>{text}</p>

      <CommentCardFooter>
        <div>
          <button
            className={`like-color ${liked ? "on" : "off"}`}
            onClick={() => likeHandeler(id, setMessages, setRecentComments)}        

         

            >❤️</button>
          <p>x {likes}</p>
        </div>
        <p>{timestamp}</p>
      </CommentCardFooter>
    </CommentCardWrapper>


  )
}