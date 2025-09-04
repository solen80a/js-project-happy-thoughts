import styled from 'styled-components';

const SvgWrapper = styled.div`
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
`;

export const HappyFaceWarnIcon = () => (
  <SvgWrapper>
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      {/* Background circle */}
      <circle cx="60" cy="60" r="55" fill="#f0aeae" stroke="#333" strokeWidth="4"/>

      {/* Triangle exclamation warning shape */}
      <path d="M 60 30 L 90 90 L 30 90 Z" 
            fill="none" stroke="#333" strokeWidth="4" strokeLinejoin="round"/>

      {/* Exclamation mark */}
      <line x1="60" y1="50" x2="60" y2="70" 
            stroke="#333" strokeWidth="4" strokeLinecap="round"/>
      <circle cx="60" cy="80" r="3.5" fill="#333"/>
    </svg>
  </SvgWrapper>
);