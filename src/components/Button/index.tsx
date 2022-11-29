import * as Styled from "./styles";

export type ButtonProps = {
  children: React.ReactNode;
};

export const Button = ({ children }: ButtonProps) => {
  return (
    <Styled.Wrapper>
      {children}
      <span>
        <svg viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z"
            fill="none"
            fillRule="evenodd"
          ></path>
        </svg>
      </span>
    </Styled.Wrapper>
  );
};
