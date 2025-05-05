import { useState, useEffect } from "react";
import { MessageCard } from "../message-card/MessageCard"
import { CommentCard } from "../comment-card/CommentCard";
import moment from 'moment';

//#region --- FUNCTIONS ---
export const Cards = () => {

  const [userInput, setUserInput] = useState("")
  const [messages, setMessages] = useState([])
  const [maxCharacterMessage, setMaxCharacterMessage] = useState("")
  const [maxCharacterIndicator, setMaxCharacterIndicator] = useState(false)
  // const [CharacterCount, setCharacterCount] = useState(0) 
  const [recentComments, setRecentComments] = useState([]);

  useEffect(() => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then(res => res.json())
      .then(json => {
        console.log(json)
        const normalized = json.map((item) => ({
          id: item._id,
          text: item.message.trim(),
          timestamp: moment(item.createdAt).fromNow(),
          likes: item.hearts,
          liked: false
        }))
        setRecentComments(normalized)
      })
  }, []);


  const submitHandler = (event) => {
    event.preventDefault();

    if (userInput.trim() === "") //The Trim takes away all the spaces
      return

    if (userInput.length >= 70) {
      setMaxCharacterMessage(`: You entered to many characters!`)
      setMaxCharacterIndicator(true)
      return
    } else {
      setMaxCharacterMessage("")
      setMaxCharacterIndicator(false)
    }

    const newMessage = {
      id: Date.now(), // This will be a uniqe ID
      text: userInput.trim(),
      timestamp: moment().fromNow(),
      likes: 0,
      liked: false,
      newLiked: false,
    }

    setMessages((prev) => [newMessage, ...prev])
    setUserInput("")
  }

  const likeHandeler = (id) => {
    if (setMessages) {
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
  };



  //   if (setRecentComments){
  //     setRecentComments((prevMessages) =>
  //     prevMessages.map((message) =>
  //       message.id === id
  //         ? {
  //             ...message,
  //             liked: !message.liked,
  //             likes: message.liked ? message.likes - 1 : message.likes + 1,
  //           }
  //         : message
  //     )
  //   );
  // }


  //#endregion

  return (
    <>
      < MessageCard
        input={userInput}
        setInput={setUserInput}
        comment={submitHandler}
        maxCharacters={maxCharacterMessage}
        maxCharacterIndicator={maxCharacterIndicator}
      />

      {messages.map((message) => (
        <>
          <CommentCard
            key={message.id}
            text={message.text}
            timestamp={message.timestamp}
            likes={message.likes}
            newLiked={message.liked}
            likeHandeler={() => likeHandeler(message.id)}
          />

        </>
      ))}

      {recentComments.map((comment) => (
        <>
          <CommentCard
            key={comment.id}
            text={comment.text}
            timestamp={comment.timestamp}
            likes={comment.likes}
            // vill ju inte att den ska vara markerad om inte 
            // jag likat, vilket den är nu
            liked={comment.liked}
            // liked={reccomment.hearts > 0 ? true : false}
            //liked={reccomment.hearts}
            likeHandeler={() => likeHandeler(comment.id)}
          />
        </>
      ))}

    </>
  )
}