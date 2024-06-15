import { render, screen } from "@testing-library/react";
import ProductInfoCard from "../ProductInfoCard";

test("renders skeleton when product not provided", () => {
  render(<ProductInfoCard />);
  expect(screen.getByTestId(/product-info-card-skeleton/i)).toBeInTheDocument();
});

test("renders card when product provided", () => {
  const product = {
    id: "ID",
    title: "Test Data",
    image: "https://images-na.ssl-images-amazon.com/images/I/51h-a5IaHeL.jpg",
    subtitle: "Test Data Subtitle",
    brand: "Brand",
    reviews: [],
    retailer: "Retailer",
    details: [],
    tags: ["Test-Tag"],
    sales: [],
  };

  render(<ProductInfoCard product={product} />);
  expect(screen.getByText(product.title)).toBeInTheDocument();
  expect(screen.getByText(product.subtitle)).toBeInTheDocument();
  expect(screen.getByText("Test-Tag")).toBeInTheDocument();
});
