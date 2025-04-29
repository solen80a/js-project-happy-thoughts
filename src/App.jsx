import { MessageCard } from "./section/message-card/MessageCard"
import { CommentCard } from "./section/comment-card/CommentCard"

export const App = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Happy Thoughts</h1>
      {/* <Header /> */}
      < MessageCard />
      <CommentCard />
      {/* <Footer/> */}
    </>
  )
}



// const handleSeeMoreClick = () => {
//   setShowAll(prev => !prev); // Toggle true <-> false
// }
// return (
//   <>
//     <Section>
//       <H2ExtraMargin>Featured Projects</H2ExtraMargin>
//       {data.cardData
//         .filter(card => showAll || card.displayCard !== "none")
//         .map((card, id) => (
//           <ProjectCard
//             key={id}
//             title={card.title}
//             description={card.description}
//             languageTag={card.languageTag}
//             img={card.img}
//             livePageLink={card.livePageLink}
//             gitHubLink={card.gitHubLink}
//             flippedOrder={id % 2 !== 0}
//           />
//         ))}
//       <Button
//         text={showAll ? "Show less" : "See more projects"}
//         icon={showAll ? "./Ic-ArrowUp.png" : "./Ic-ArrowDown.svg"}
//         onClick={handleSeeMoreClick} />
//     </Section >
//   </>
// )
// }