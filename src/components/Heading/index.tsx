import * as Styled from "./styles";

export type HeadingProps = {
  children: string;
  size?: string;
};

export const Heading = ({ children, size }: HeadingProps) => {
  return <Styled.Title size={size}>{children}</Styled.Title>;
};
