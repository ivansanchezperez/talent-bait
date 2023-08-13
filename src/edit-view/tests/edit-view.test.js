import { render, screen } from "@testing-library/react";
import IndexView from "../read-view";

test("renders learn react link", () => {
  render(<IndexView />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
