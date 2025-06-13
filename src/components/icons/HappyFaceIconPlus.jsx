import styled from 'styled-components';

const SvgWrapper = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  display: inline-block;

  svg {
    width: 100%;
    height: 100%;
  }

  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease;
  }

  &::after {
    content: "+";
    position: absolute;
    top: -6px;
    right: -6px;
    width: 14px;
    height: 14px;
    background-color: #f0aeae;
    color: #333;
    font-size: 10px;
    font-weight: bold;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 2px rgba(0,0,0,0.3);
  }
`;

export const HappyFaceIconPlus = () => (
  <SvgWrapper>
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="55" fill="#f0aeae" stroke="#333" strokeWidth="4" />
      <circle cx="45" cy="50" r="5" fill="#333" />
      <circle cx="75" cy="50" r="5" fill="#333" />
      <path d="M 45 75 Q 60 90, 75 75" stroke="#333" strokeWidth="4" fill="none" strokeLinecap="round" />
    </svg>
  </SvgWrapper>
);


