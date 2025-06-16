import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
  }

h1{
  text-align: center;
  
}

header{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;  
}

textarea {
  height: 80px;
  width: 100%;
  max-width: 450px;
  padding: 10px 20px;
  cursor: pointer;
  padding-bottom: 35px;
}

button {
    background-color: #eeeeee;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    transition: ease .3s;

    &:hover {
      background-color: #f0aeae;
      transform: scale(1.03);
    }
  }

`