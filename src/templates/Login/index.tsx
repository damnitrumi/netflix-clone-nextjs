import { LoginHeader } from "components/LoginComponents/LoginHeader";
import { LoginArea } from "components/LoginComponents/LoginArea";
import * as Styled from "./styles";
import { LoginFooter } from "components/LoginComponents/LoginFooter";
import { LoginBanner } from "components/LoginComponents/LoginBanner";

export const LoginPage = () => {
  return (
    <Styled.Wrapper>
      <LoginHeader />
      <LoginArea />
      <LoginFooter />
      <LoginBanner />
    </Styled.Wrapper>
  );
};
