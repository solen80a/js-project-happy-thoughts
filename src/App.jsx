import { Cards } from "./section/cards/Cards";
import { H1 } from "./styling/Typography"
import { Footer } from "./section/Footer";
import { MessageCardRecent } from "./section/message-card/MessageCardRecent";

export const App = () => {

  return (
    <>
      <H1>Happy Thoughts</H1>
      <Cards />
      <Footer />
    </>
  )
}

