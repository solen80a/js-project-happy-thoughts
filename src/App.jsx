import { Cards } from "./section/cards/Cards";
import { Footer } from "./section/Footer";
import { GlobalStyle } from "./styling/GlobalStyle"
import { Title } from "./styling/Typography"

export const App = () => {

  return (
    <>
      <GlobalStyle />
      <Title>Happy Thoughts</Title>
      <Cards />
      <Footer />
    </>
  )
}

