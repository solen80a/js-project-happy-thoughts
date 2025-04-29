import { useState} from "react";

export const CommentCard = () => {

  const [like, setLike] = useState(0)

  const likeHandeler = () => {
    setLike(like === 0 ? like + 1 : like - 1)
  }

  return (
    <>
    <p> temp{} </p>
    <button onClick={likeHandeler}>❤️</button>
    <p>x {like}</p>
    </>


  )
}