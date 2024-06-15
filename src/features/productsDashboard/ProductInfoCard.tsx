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
      <Skeleton
        variant="rectangular"
        height="100%"
        width="100%"
        data-testid="product-info-card-skeleton"
      />
    );
  }

  return (
    <Card
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <CardMedia
        sx={{
          mt: 4,
          mx: 4,
          width: "300px",
          height: "300px",
        }}
        image={product.image}
        title={product.title}
      />
      <CardContent
        sx={{
          padding: 0,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            px: 4,
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" component="div" color="text.secondary">
            {product.subtitle}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "center", md: "flex-start" },
            gap: 1,
            px: 4,
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
