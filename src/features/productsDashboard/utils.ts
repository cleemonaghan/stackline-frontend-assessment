import { DisplayType } from "./const";

export const getDisplayTypeLabel = (type: DisplayType) => {
  switch (type) {
    case DisplayType.retailSales:
      return "Retail Sales";
    case DisplayType.wholesaleSales:
      return "Wholesale Sales";
    case DisplayType.unitsSold:
      return "Units Sold";
    case DisplayType.retailerMargin:
      return "Retailer Margin";
  }
};
