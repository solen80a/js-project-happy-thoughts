import {useState, useEffect} from "react";
import { CommentCard } from "../section/comment-card/CommentCard";




export const APIFetch = () => {
  const [recentComments, setRecentComments] = useState([]);

  useEffect(() => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then(res => res.json())
      //.then(json => console.log(json))
      .then(json => {
        console.log(json);
        setRecentComments(json)
      })
      
  }, []);

return (
  <div>
    
   {recentComments.map((reccomment) => (  
    <>  
    <CommentCard 
    key={reccomment._id}
    id={reccomment._id}
    text={reccomment.message}
    like={reccomment.hearts}
    timestamp={reccomment.createdAt}
    >{reccomment.message}</CommentCard>
    </>
   ))} 

  </div>
);
}