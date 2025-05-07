import { useState, useEffect } from "react";
import { MessageCard } from "../message-card/MessageCard"
import { CommentCard } from "../comment-card/CommentCard";
import moment from 'moment';
import { Loader } from "../../components/Loader";

//#region --- FUNCTIONS ---
export const Cards = () => {

  const [userInput, setUserInput] = useState("")
  const [messages, setMessages] = useState([])
  const [recentComments, setRecentComments] = useState([]);
  const [loading, setLoading] = useState(false);

  const apiUrl = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts"

  // const newMessage = {
  //     id: Date.now(), // This will be a uniqe ID
  //     text: userInput.trim(),
  //     timestamp: moment().fromNow(),
  //     likes: 0,
  //     liked: false,
  //   }

  useEffect(() => {
    setLoading(true);

    fetch(apiUrl)
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json()
      })
      .then(json => {
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
        setLoading(false);
      });
  }, []);

//  const postMessageToAPI = () => {

//     fetch(apiUrl, {
//         method: "POST",
//         body: JSON.stringify({
//         message: "svejsan",
//       }),
//       headers: { "Content-Type": "application/json" },
//     })
//       .then((res) => res.json())
//       .then((newThought) => {       
//         //setMessages((previousThoughts) => [newThought, ...previousThoughts])
//         console.log(newThought)
//       })  
//   }

  const submitHandler = (event) => {
    event.preventDefault();

    if (userInput.trim() === "") //The Trim takes away all the spaces
      return

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

  // const likeHandeler = (id) => {
  //   if (setMessages) {
  //     setMessages((prevMessages) =>
  //       prevMessages.map((message) =>
  //         message.id === id
  //           ? {
  //             ...message,
  //             liked: !message.liked,
  //             likes: message.liked ? message.likes - 1 : message.likes + 1,
  //           }
  //           : message
  //       )
  //     );
  //   }
  //   if (setRecentComments) {
  //     setRecentComments((prevMessages) =>
  //       prevMessages.map((message) =>
  //         message.id === id
  //           ? {
  //             ...message,
  //             liked: !message.liked,
  //             likes: message.liked ? message.likes - 1 : message.likes + 1,
  //           }
  //           : message
  //       )
  //     );
  //   }
  // };

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
        />
      </section>
      <section>
        {messages.map((message, index) => (
          <CommentCard
            key={message.id}
            //id={message.id}
            text={message.text}
            timestamp={message.timestamp}
            likes={message.likes}
            liked={message.liked}
            // likeHandeler={() => likeHandeler(message.id)}
            setMessages={setMessages}
            setRecentComments={setRecentComments}
            isNewComment={index === 0}
          />
        ))}

        {recentComments.map((comment) => (
          <>
            <CommentCard
              key={comment.id}
              id={comment.id}
              text={comment.text}
              timestamp={comment.timestamp}
              likes={comment.likes}
              liked={comment.liked}
              //likeHandeler={() => likeHandeler(comment.id)}
              setMessages={setMessages}
              setRecentComments={setRecentComments}
            />
          </>
        ))}
      </section>      
    </>
  )
}