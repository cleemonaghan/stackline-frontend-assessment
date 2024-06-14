import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
} from "@mui/material";
import { Product } from "./productsSlice";

const ProductInfoCard = ({ product }: { product?: Product }) => {
  if (!product) {
    return (
      <Box sx={{ height: "100%", width: "100%" }}>
        <Skeleton height="600px" width="100%" />
      </Box>
    );
  }

  return (
    <Card>
      <CardMedia
        sx={{ height: 300 }}
        image={product.image}
        title={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.subtitle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductInfoCard;
