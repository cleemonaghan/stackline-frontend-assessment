import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
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
    <Card sx={{ padding: 4 }}>
      <CardMedia
        sx={{
          width: "auto",
          height: "25%",
        }}
        image={product.image}
        title={product.title}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.subtitle}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            gap: 1,
            marginTop: 2,
            paddingTop: 2,
            borderTop: "1px solid",
            borderColor: "divider",
          }}
        >
          {product.tags.map((tag) => (
            <Chip variant="outlined" label={tag} sx={{ borderRadius: 2 }} />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductInfoCard;
