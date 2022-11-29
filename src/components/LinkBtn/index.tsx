import * as Styled from "./styles";

export type LinkBtnProps = {
  children?: React.ReactNode;
  href?: string;
};

export const LinkBtn = ({ children, href }: LinkBtnProps) => {
  return <Styled.Wrapper href={href}>{children}</Styled.Wrapper>;
};
