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
    return <Skeleton variant="rectangular" height="100%" width="100%" />;
  }

  return (
    <Card
      sx={{
        width: "100%",
        padding: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <CardMedia
        sx={{
          width: "300px",
          height: "300px",
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
        <Typography variant="body2" component="div" color="text.secondary">
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
          {product.tags.map((tag, i) => (
            <Chip
              variant="outlined"
              label={tag}
              sx={{ borderRadius: 2 }}
              key={`${tag}-${i}`}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductInfoCard;
