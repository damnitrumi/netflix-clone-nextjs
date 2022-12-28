import { IntroBanner } from "components/IntroBanner";
import { IntroCard1 } from "components/IntroCard1";
import { IntroCard2 } from "components/IntroCard2";
import { IntroCard3 } from "components/IntroCard3";
import { IntroCard4 } from "components/IntroCard4";
import { IntroCard5 } from "components/IntroCard5";
import { IntroFooter } from "components/IntroFooter";
import { IntroHeader } from "components/IntroHeader";
import { IntroSubscription } from "components/IntroSubscription";
import * as Styled from "./styles";

export const SubscribeIntro = () => {
  return (
    <Styled.Wrapper>
      <IntroBanner />
      <IntroHeader />
      <IntroSubscription />
      <IntroCard1 />
      <IntroCard2 />
      <IntroCard3 />
      <IntroCard4 />
      <IntroCard5 />
      <IntroFooter />
    </Styled.Wrapper>
  );
};
