import * as Styled from "./styles";

export type TextProps = {
  children: React.ReactNode;
  size?: string;
};

export const Text = ({ children, size = "1.6rem" }: TextProps) => {
  return <Styled.Wrapper size={size}>{children}</Styled.Wrapper>;
};
