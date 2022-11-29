import styled, { css } from "styled-components";
import { HeadingProps } from ".";

const pickSize = (size: string) => {
  if (size) {
    return css`
      font-size: ${size};
    `;
  }
};

export const Title = styled.h1<HeadingProps>`
${({ size }) => css`
  color: white;
  text-align: center;
  ${pickSize(size)}
`}
`;
