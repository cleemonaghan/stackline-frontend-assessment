import { Box, Card, Skeleton } from "@mui/material";
import { Product } from "./productsSlice";

const ProductSalesGraph = ({ product }: { product?: Product }) => {
  if (!product) {
    return <Skeleton variant="rectangular" height={500} width="100%" />;
  }

  return <Card sx={{ padding: 4 }}>Graph</Card>;
};

export default ProductSalesGraph;
