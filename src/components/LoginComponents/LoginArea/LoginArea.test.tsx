import { screen } from "@testing-library/react";
import { LoginArea } from ".";
import { renderTheme } from "../../../styles/render-theme";

describe("<LoginArea />", () => {
  it("should render", () => {
    renderTheme(<LoginArea />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
