import { useState } from "react";
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
  transition: ease 1s;

  @media (min-width: 640px) {
    width: 620px;    
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

      @keyframes Pulse {
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

export const CommentCard = ({ text, timestamp }) => {

  const [like, setLike] = useState(0)
  const [likeColor, setLikeColor] = useState(false)

  const likeHandeler = () => {
    return (
      setLike(like === 0 ? like + 1 : like - 1),
      setLikeColor((prev) => !prev)

    )
  }


  return (
    <CommentCardWrapper>

      <p>{text}</p>

      <CommentCardFooter>
        <div>
          <button
            className={`like-color ${likeColor ? "on" : "off"}`}
            onClick={likeHandeler}>❤️</button>
          <p>x {like}</p>
        </div>
        <p>{timestamp}</p>
      </CommentCardFooter>
    </CommentCardWrapper>


  )
}