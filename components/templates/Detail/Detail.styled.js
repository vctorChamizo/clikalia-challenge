import styled from "styled-components";

export const SCDetail = styled.section`
  .error-wrapper {
    text-align: center;

    p {
      margin-top: ${({ theme }) => theme.spaces.m.mobileSize};
    }

    button {
      margin-top: ${({ theme }) => theme.spaces.xs.mobileSize};
    }
  }
`;
