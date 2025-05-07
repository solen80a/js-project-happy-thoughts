import { useState, useEffect } from "react";
import { MessageCard } from "../message-card/MessageCard"
import { CommentCard } from "../comment-card/CommentCard";
import moment from 'moment';
import { Loader } from "../../components/Loader";

//#region --- FUNCTIONS ---
export const Cards = () => {

  const [userInput, setUserInput] = useState("")
  const [messages, setMessages] = useState([])
  // const [maxCharacterMessage, setMaxCharacterMessage] = useState("")
  // const [maxCharacterIndicator, setMaxCharacterIndicator] = useState(false)
  // const [CharacterCount, setCharacterCount] = useState(0) 
  const [recentComments, setRecentComments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json()
      })
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
      .catch(error => {
        console.error('Fetch error:', error.message);
      })
      .finally(() => {
        console.log('Fetch operation finished (success or error).');
        setLoading(false);
      });
  }, []);




  const submitHandler = (event) => {
    event.preventDefault();

    if (userInput.trim() === "") //The Trim takes away all the spaces
      return

    // if (userInput.length >= 70) {
    //   setMaxCharacterMessage(`: You entered to many characters!`)
    //   setMaxCharacterIndicator(true)
    //   return
    // } else {
    //   setMaxCharacterMessage("")
    //   setMaxCharacterIndicator(false)
    // }

    const newMessage = {
      id: Date.now(), // This will be a uniqe ID
      text: userInput.trim(),
      timestamp: moment().fromNow(),
      likes: 0,
      liked: false,
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

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <section>
        < MessageCard
          userInput={userInput}
          setUserInput={setUserInput}
          comment={submitHandler}
        // maxCharacters={maxCharacterMessage}
        // maxCharacterIndicator={maxCharacterIndicator}

        />
      </section>
      <section>
        {messages.map((message, index) => (
          <CommentCard
            key={message.id}
            text={message.text}
            timestamp={message.timestamp}
            likes={message.likes}
            liked={message.liked}
            likeHandeler={() => likeHandeler(message.id)}
            isNewComment={index === 0}
          />
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
      </section>
    </>
  )
}