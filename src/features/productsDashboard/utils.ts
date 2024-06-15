import { DisplayType } from "./const";

export const getDisplayTypeLabel = (type: DisplayType) => {
  switch (type) {
    case "retailSales":
      return "Retail Sales";
    case "wholesaleSales":
      return "Wholesale Sales";
    case "unitsSold":
      return "Units Sold";
    case "retailerMargin":
      return "Retailer Margin";
    default:
      throw new Error("Unexpected display label type: " + type);
  }
};
