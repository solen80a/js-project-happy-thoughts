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

export const HappyFaceLogoutIcon = () => (
  <SvgWrapper>
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      {/* Background circle to match style */}
      <circle cx="60" cy="60" r="55" fill="#f0aeae" stroke="#333" strokeWidth="4"/>

      {/* Door / rectangle */}
      <rect x="35" y="35" width="30" height="50" rx="4" ry="4" 
            fill="none" stroke="#333" strokeWidth="4"/>

      {/* Arrow pointing outward */}
      <path d="M 70 60 L 95 60" stroke="#333" strokeWidth="4" strokeLinecap="round"/>
      <path d="M 85 50 L 95 60 L 85 70" 
            fill="none" stroke="#333" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </SvgWrapper>
);


