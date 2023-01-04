import * as Styled from "./styles";

export type LoginBtnProps = {
  children: React.ReactNode;
  onBtnClick?: () => void;
  disabled: boolean;
};

export const LoginBtn = ({ children, onBtnClick, disabled }: LoginBtnProps) => {
  return (
    <Styled.Wrapper onClick={onBtnClick && onBtnClick} disabled={disabled}>
      {children}
    </Styled.Wrapper>
  );
};
