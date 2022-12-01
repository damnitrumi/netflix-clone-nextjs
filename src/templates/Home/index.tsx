import { IntroBanner } from "components/IntroBanner";
import { IntroHeader } from "components/IntroHeader";
import { IntroSubscription } from "components/IntroSubscription";
import * as Styled from "./styles";

export const SubscribeIntro = () => {
  return (
    <Styled.Wrapper>
      <IntroBanner />
      <IntroHeader />
      <IntroSubscription />
    </Styled.Wrapper>
  );
};
