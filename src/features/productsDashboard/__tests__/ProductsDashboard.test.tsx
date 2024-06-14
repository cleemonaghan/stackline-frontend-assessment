import { render, screen } from "@testing-library/react";
import ProductsDashboard from "../ProductsDashboard";

test("renders Graph and Table", () => {
  render(<ProductsDashboard />);
  const linkElement = screen.getByText(/Graph and Table/i);
  expect(linkElement).toBeInTheDocument();
});
