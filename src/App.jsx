import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Cards } from "./section/cards/Cards";
import { Footer } from "./section/Footer";
import { Header } from "./section/Header";
import { UserSignin } from "./section/UserSignin";
import { UserSignup } from "./section/UserSignup";
import { GlobalStyle } from "./styling/GlobalStyle"

export const App = () => {

  return (
    <>
    <BrowserRouter>
      <GlobalStyle />      
      <Header/>
      <Routes>
        <Route path="/" element={<Cards />}></Route>
        <Route path="/usersignin" element={<UserSignin/>}></Route>
        <Route path="/usersignup" element={<UserSignup/>}></Route>
      </Routes>     
    </BrowserRouter>
    </>
  )
}

