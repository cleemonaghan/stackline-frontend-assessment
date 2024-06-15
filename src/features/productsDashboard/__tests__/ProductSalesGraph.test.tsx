import { render, screen } from "@testing-library/react";
import ProductSalesGraph from "../ProductSalesGraph";

test("renders skeleton when product not provided", () => {
  render(
    <ProductSalesGraph displayType="retailSales" setDisplayType={() => null} />
  );
  expect(
    screen.getByTestId(/product-sales-graph-skeleton/i)
  ).toBeInTheDocument();
});

test("renders graph when product provided", () => {
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

  render(
    <ProductSalesGraph
      product={product}
      displayType="retailSales"
      setDisplayType={() => null}
    />
  );
  expect(screen.getAllByText(/Retail Sales/i).length).toBe(2);
});
