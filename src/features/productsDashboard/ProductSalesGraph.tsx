import { Box, Card, Skeleton, Typography } from "@mui/material";
import { Product } from "./productsSlice";
import { LineChart } from "@mui/x-charts";
import {
  lineElementClasses,
  markElementClasses,
} from "@mui/x-charts/LineChart";
import moment from "moment";

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

const ProductSalesGraph = ({ product }: { product?: Product }) => {
  if (!product) {
    return <Skeleton variant="rectangular" height={500} width="100%" />;
  }

  const graphData = product.sales.map((sale) => {
    let date = new Date(sale.weekEnding);
    date = moment(date).add(date.getTimezoneOffset(), "m").toDate();
    return { y: sale.retailSales, x: date };
  });

  return (
    <Card sx={{ padding: 4 }}>
      <Typography variant="h6" component="div">
        Retail Sales
      </Typography>
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
