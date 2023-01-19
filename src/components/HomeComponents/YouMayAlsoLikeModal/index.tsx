import * as Styled from "./styles";

export type YouMayAlsoLikeModalProps = {
  posterHorizontal: string;
};

export const YouMayAlsoLikeModal = ({
  posterHorizontal,
}: YouMayAlsoLikeModalProps) => {
  return (
    <Styled.Wrapper href="/">
      <Styled.ImageContainer
        posterHorizontal={posterHorizontal}
      ></Styled.ImageContainer>
    </Styled.Wrapper>
  );
};
