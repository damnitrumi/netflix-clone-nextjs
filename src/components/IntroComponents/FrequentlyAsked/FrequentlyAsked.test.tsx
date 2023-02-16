import { screen } from "@testing-library/react";
import { FrequentlyAsked } from ".";
import { renderTheme } from "../../../styles/render-theme";

describe("<FrequentlyAsked />", () => {
  it("should render", () => {
    renderTheme(<FrequentlyAsked />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
