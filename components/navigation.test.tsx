import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Navigation from "./navigation";

describe("navigation", () => {
  it("renders a component", () => {
    render(<Navigation />);

    const heading = screen.getByText("Home");
    expect(heading).toBeInTheDocument();
  });
});
