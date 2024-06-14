import { render, screen } from "@testing-library/react";
import ProductsDashboard from "../ProductsDashboard";

test("renders learn react link", () => {
  render(<ProductsDashboard />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
