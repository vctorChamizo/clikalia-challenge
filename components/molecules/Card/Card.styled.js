import styled from "styled-components";

export const SCCard = styled.div`
  width: 100vw;
  height: 60vh;

  border-width: 1px 1px 15px 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.color.primary};

  img {
    width: 100%;
    height: 40vh;
  }

  .card-wrapper {
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: ${({ theme }) => theme.spaces.xs.mobileSize};

    .text-wrapper {
      width: 80%;

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
`;
