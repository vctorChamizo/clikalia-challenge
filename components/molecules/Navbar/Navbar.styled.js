import styled from "styled-components";

export const SCNavbar = styled.nav`
  width: 100%;

  padding: ${({ theme }) => theme.spaces.xs.mobileSize};

  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;

  z-index: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${({ theme }) => theme.color.primary};

  p {
    font-size: ${({ theme }) => theme.typographySizes.xl.mobileSize};
    color: ${({ theme }) => theme.color.white};
  }
`;
