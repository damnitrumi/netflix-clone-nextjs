import styled, { css } from "styled-components";
import { Title as Heading } from "../Heading/styles";
import { Wrapper as Button } from "../Button/styles";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 950px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: center;
    padding-bottom: 86px;


    ${Heading}{
      margin: 0 auto;
      line-height: 1.1;
    };

    > ${Heading}:first-child{
      max-width: 800px;
      padding: 0 50px;
      font-family: Netflix-Medium;
    };

    ${Button}{
      &:hover{
      background-color: ${theme.colors.netflixHoverColor};
    }
    }

  `}
`;

export const SubsForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 12px;

  ${Heading}{

  }
`;

export const SubsInput = styled.input`
  outline: none;
  flex: 1;
  border: 1px solid #8c8c8c;
  font-size: 1.6rem;
  padding: 10px 10px 0 10px;
`;

export const SubsContainer = styled.div`
  display: flex;
  flex: 1;
  position: relative;

  label{
    position: absolute;
    left: 10px;
    color: #8c8c8c;
    top: 50%;
    transform: translateY(-50%);
    transition: all .1s ease-in-out;
    pointer-events: none;
  }

  > ${SubsInput}:focus{
    border-color: #0071eb;
  }

  > ${SubsInput}:focus + label{
    transform: translateY(0);
    top: 6px;
    font-family: Netflix-Medium;
    font-size: 1.3rem;
  }
`;

export const SubsWrapper = styled.div`
  max-width: 710px;
  margin: 0 auto;
  display: flex;
  width: 100%;
`;
