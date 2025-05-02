import styled from "styled-components";

const FooterWrapper = styled.footer`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  padding: 24px;
  background-color: pink; 
  left: 0px;
  bottom: 0px; 
  right: 0px;
  margin-bottom: 0px;
  /* margin-top: 100px; */
  position: fixed;

  i {
    font-size: 30px;
  }

`

export const Footer = () => {
  return (
    <FooterWrapper>
      <p>Created by: Simon & Sofia</p>
    </FooterWrapper>
  )
}