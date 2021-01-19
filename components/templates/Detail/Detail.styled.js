import styled from "styled-components";

export const SCDetail = styled.section`
  .image-wrapper {
    border-width: 0px 0px 15px 0px;
    border-style: solid;
    border-color: ${({ theme }) => theme.color.primary};

    img {
      width: 100%;
      height: 35vh;
    }
  }

  .title-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: ${({ theme }) => theme.spaces.xs.mobileSize};

    border-width: 0px 0px 2px 0px;
    border-style: solid;
    border-color: ${({ theme }) => theme.color.primary};

    p {
      font-size: ${({ theme }) => theme.typographySizes.l.mobileSize};
      color: ${({ theme }) => theme.color.primary};
    }

    .icon-wrapper {
      width: 20%;
      margin-left: ${({ theme }) => theme.spaces.xs.mobileSize};

      svg {
        fill: ${({ theme }) => theme.color.primary};
        width: 30px;
        height: 30px;
      }
    }
  }

  .text-wrapper {
    padding: ${({ theme }) => theme.spaces.xs.mobileSize};

    p {
      font-family: ${({ theme }) => theme.typography.poppinsRegular};
      font-size: ${({ theme }) => theme.typographySizes.s.mobileSize};
      line-height: ${({ theme }) => theme.typographySizes.s.mobileLine};
      color: ${({ theme }) => theme.color.black};

      span {
        font-family: ${({ theme }) => theme.typography.poppinsBold};
        font-size: ${({ theme }) => theme.typographySizes.s.mobileSize};
        line-height: ${({ theme }) => theme.typographySizes.s.mobileLine};
        color: ${({ theme }) => theme.color.primary};
      }
    }
  }

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
