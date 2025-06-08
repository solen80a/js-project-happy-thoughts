import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;       
    /* margin: 0;
    padding: 0;     */
  }

fieldset{
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #eeeeee;
  border: 1px solid black;
  border-radius: 2px;
  width: 280px;
  margin: 0 auto;
  padding: 12px 18px;
  gap: 12px;
  box-shadow: 10px 10px 0 rgba(0, 0, 0, 1);

}  

textarea {
  height: 80px;
  width: 100%;
  max-width: 450px;
  padding: 10px 20px;
  cursor: pointer;
  padding-bottom: 35px;
}


`