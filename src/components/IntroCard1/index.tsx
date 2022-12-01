import { Heading } from "components/Heading";
import { IntroContainer } from "components/IntroContainer";
import * as Styled from "./styles";

export type IntroCard1Props = {
  h1Value: string;
  h2Value: string;
  imgUrl: string;
};

export const IntroCard1 = ({ h1Value, h2Value, imgUrl }: IntroCard1Props) => {
  return (
    <IntroContainer>
      <Styled.Wrapper>
        <Styled.HeadingsContainer>
          <Heading size="5.0rem">{h1Value}</Heading>
          <Heading size="2.6rem" as="h2">
            {h2Value}
          </Heading>
        </Styled.HeadingsContainer>
        <Styled.ImageContainer>
          <img src={imgUrl} alt={imgUrl} />
        </Styled.ImageContainer>
      </Styled.Wrapper>
    </IntroContainer>
  );
};
