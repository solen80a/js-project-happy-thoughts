import { Cards } from "./section/cards/Cards";
import { Titlte } from "./styling/Typography"
import { Footer } from "./section/Footer";
import { MessageCardRecent } from "./section/message-card/MessageCardRecent";

export const App = () => {

  return (
    <>
      <Titlte>Happy Thoughts</Titlte>
      <Cards />
      <Footer />
    </>
  )
}

