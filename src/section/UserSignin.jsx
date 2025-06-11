import styled from "styled-components"

import { EditIcon } from "../components/icons/EditIcon"
import { SaveIcon } from "../components/icons/SaveIcon"

const UserSigninWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: left;
  border: 1px solid #000;
  box-shadow: 10px 10px 0 rgba(0, 0, 0, 1);
  width: 280px;
  margin: 28px auto;
  padding: 12px 18px;
  gap: 12px;

  @media (min-width: 640px) {
    width: 620px;    
  }

  input{
    height: 80px;
    width: 100%;    
  }

  div{
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%; */
  }

`

export const UserSignin = () => {
  return(
    <section>
      <form>
        <fieldset>          
          <div>
            <label for="email"></label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              placeholder="e.g., myusername@mail.com"/>
          </div>
          <div>
            <label for="password"></label>
            <input 
              type="text" 
              name="password" 
              id="password" 
              placeholder="something secret"/>
          </div>
          <div>
            <button type="submit"><SaveIcon/></button>
            
          </div>      
        </fieldset>
        
      </form>
    </section>
  )  
}