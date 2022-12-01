import * as Styled from "./styles";

export type HeadingProps = {
  children: string;
  size?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export const Heading = ({ children, size, as = "h1" }: HeadingProps) => {
  return (
    <Styled.Title size={size} as={as}>
      {children}
    </Styled.Title>
  );
};
