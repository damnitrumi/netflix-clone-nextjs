import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { Text, TextProps } from ".";

const props: TextProps = {
  children: "Testing",
};

describe("<Text />", () => {
  it("should render Text with default values", () => {
    renderTheme(<Text {...props} />);

    expect(screen.getByText("Testing")).toBeInTheDocument();
  });
  it("should render Text with sent values", () => {
    renderTheme(<Text {...props} size="3.2rem" />);

    expect(screen.getByText("Testing")).toHaveStyleRule("font-size", "3.2rem");
  });
  it("should match snapshot", () => {
    renderTheme(<Text {...props} />);

    expect(screen.getByText("Testing")).toMatchSnapshot();
  });
});
