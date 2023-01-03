import * as Styled from "./styles";

export type LoginBtnProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export const LoginBtn = ({ children, onClick }: LoginBtnProps) => {
  return (
    <Styled.Wrapper onClick={onClick && onClick}>{children}</Styled.Wrapper>
  );
};
