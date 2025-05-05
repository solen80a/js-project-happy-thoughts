import {useState, useEffect} from "react";
import { CommentCard } from "../comment-card/CommentCard";
import moment from "moment";



export const MessageCardRecent = () => {
  const [recentComments, setRecentComments] = useState([]);

  useEffect(() => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then(res => res.json())      
      .then(json => {
        console.log(json);
        setRecentComments(json)
      })
      
  }, []);

 
  return (
    <>
      
    {recentComments.map((reccomment) => (  
      <>  
      <CommentCard 
        key={reccomment._id}
        id={reccomment._id}    
        text={reccomment.message}
        timestamp={moment(reccomment.createdAt).fromNow()}
        likes={reccomment.hearts}    
        />
      </>
    ))} 

    </>
  );
}