import { render, screen } from "@testing-library/react";
import ProductSalesTable from "../ProductSalesTable";

test("renders skeleton when product not provided", () => {
  render(<ProductSalesTable displayType="retailSales" />);
  expect(screen.queryByText(/Week Ending/i)).toBeNull();
});

test("renders table when product provided", () => {
  const product = {
    id: "ID",
    title: "Test Data",
    image: "https://images-na.ssl-images-amazon.com/images/I/51h-a5IaHeL.jpg",
    subtitle: "Test Data Subtitle",
    brand: "Brand",
    reviews: [],
    retailer: "Retailer",
    details: [],
    tags: [],
    sales: [
      {
        weekEnding: "2017-01-01",
        retailSales: 348123,
        wholesaleSales: 255721,
        unitsSold: 887,
        retailerMargin: 123294,
      },
    ],
  };

  render(<ProductSalesTable product={product} displayType="retailSales" />);
  expect(screen.getAllByText(/Week Ending/i).length).toBe(2);
  expect(screen.getAllByText(/Retail Sales/i).length).toBe(2);
});
