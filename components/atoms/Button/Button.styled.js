import styled from "styled-components";

export const SCButton = styled.button`
  min-width: 245px;
  padding: 8px;
  min-height: 40px;
  text-align: center;
  border-radius: 4px;
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  display: inline-flex;
  justify-content: center;
  align-items: center;

  &:hover {
    filter: drop-shadow(0px 0px 16px rgba(10, 117, 208, 0.2));
  }

  &:active {
    color: ${({ theme }) => theme.color.primary};
  }

  &:disabled {
    background: ${({ theme }) => theme.color.gray};
    filter: none;
    cursor: not-allowed;
  }
`;
