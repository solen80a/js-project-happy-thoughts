import { Cards } from "./section/cards/Cards";
import { Footer } from "./section/Footer";
import { MessageCardRecent } from "./section/message-card/MessageCardRecent";

export const App = () => {

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Happy Thoughts</h1>
      <Cards />
      {/* <MessageCardRecent/> */}
      <Footer />
    </>
  )
}

