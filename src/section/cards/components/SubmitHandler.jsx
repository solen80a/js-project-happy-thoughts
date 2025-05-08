export const SubmitHandler = (event) => {
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