import {
  Box,
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Skeleton,
  Typography,
} from "@mui/material";
import { Product } from "./productsSlice";
import { LineChart } from "@mui/x-charts";
import {
  lineElementClasses,
  markElementClasses,
} from "@mui/x-charts/LineChart";
import moment from "moment";
import { DisplayType } from "./const";
import { getDisplayTypeLabel } from "./utils";

const NAVY = "#052849";

const valueFormatter = (date: Date) => {
  if (date.getMonth() === 0) {
    return date
      .toLocaleDateString("en-EN", {
        month: "short",
        year: "numeric",
      })
      .toUpperCase();
  }
  return date
    .toLocaleDateString("en-EN", {
      month: "short",
    })
    .toUpperCase();
};

const displayTypeValues: DisplayType[] = [
  "retailSales",
  "wholesaleSales",
  "unitsSold",
  "retailerMargin",
];

const ProductSalesGraph = ({
  product,
  displayType,
  setDisplayType,
}: {
  product?: Product;
  displayType: DisplayType;
  setDisplayType: (newValue: DisplayType) => void;
}) => {
  if (!product) {
    return <Skeleton variant="rectangular" height={500} width="100%" />;
  }

  const handleChange = (event: SelectChangeEvent) => {
    const {
      target: { value },
    } = event;
    setDisplayType(value as DisplayType);
  };

  const graphData = product.sales.map((sale) => {
    let date = new Date(sale.weekEnding);
    date = moment(date).add(date.getTimezoneOffset(), "m").toDate();

    let displayData = sale.retailSales;
    switch (displayType) {
      case "retailSales":
        displayData = sale.retailSales;
        break;
      case "wholesaleSales":
        displayData = sale.wholesaleSales;
        break;
      case "unitsSold":
        displayData = sale.unitsSold;
        break;
      case "retailerMargin":
        displayData = sale.retailerMargin;
        break;
      default:
        throw new Error("Unexpected display label type: " + displayType);
    }

    return { y: displayData, x: date };
  });

  return (
    <Card sx={{ paddingTop: 4, paddingX: 2 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" component="div">
          {getDisplayTypeLabel(displayType)}
        </Typography>
        <Box sx={{ minWidth: 120, paddingRight: 2 }}>
          <FormControl fullWidth>
            <InputLabel id="display-type-select-label">Display Type</InputLabel>
            <Select
              labelId="display-type-select-label"
              id="display-type-select"
              value={displayType}
              label="Display Type"
              onChange={handleChange}
            >
              {displayTypeValues.map((item) => (
                <MenuItem value={item} key={item}>
                  {getDisplayTypeLabel(item)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
      <LineChart
        height={500}
        series={[
          {
            curve: "linear",
            data: graphData.map((point) => point.y),
            label: "Retail Sales",
            color: NAVY,
          },
        ]}
        slotProps={{ legend: { hidden: true } }}
        xAxis={[
          {
            data: graphData.map((point) => point.x),
            scaleType: "time",
            valueFormatter,
            tickLabelStyle: {
              fontSize: 12,
              color: "text.secondary",
            },
          },
        ]}
        leftAxis={null}
        sx={{
          [`& .${lineElementClasses.root}`]: {
            strokeWidth: 2,
          },
          [`& .${markElementClasses.root}`]: {
            scale: "0.6",
            fill: "#fff",
            strokeWidth: 2,
          },
        }}
      />
    </Card>
  );
};

export default ProductSalesGraph;
