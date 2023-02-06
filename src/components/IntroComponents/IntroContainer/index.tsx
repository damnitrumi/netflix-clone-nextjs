import * as Styled from "./styles";

export type IntroContainerProps = {
  children: React.ReactNode;
};

export const IntroContainer = ({ children }: IntroContainerProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Container>{children}</Styled.Container>
    </Styled.Wrapper>
  );
};
