import { Box, Grid } from "@mui/material";
import Navbar from "../../common/Navbar";
import ProductInfoCard from "./ProductInfoCard";
import { ConnectedProps, connect, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { useEffect } from "react";
import { fetchProducts } from "./productsSlice";

const ProductsDashboard = (props: PropsFromRedux) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (props.products.length === 0) {
      dispatch(props.fetchProducts());
    }
  }, [dispatch]);
  const selectedProduct = props.products.at(0);

  return (
    <Box sx={{ height: "100%" }}>
      <Navbar />
      <Grid container sx={{ height: "100dvh" }}>
        <Grid
          item
          xs={12}
          sm={5}
          lg={4}
          sx={{
            display: { xs: "none", md: "flex" },
            borderRight: { sm: "none", md: "1px solid" },
            borderColor: { sm: "none", md: "divider" },
            px: 10,
            gap: 4,
          }}
        >
          <ProductInfoCard product={selectedProduct} />
        </Grid>
        <Grid
          item
          sm={12}
          md={7}
          lg={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "100%",
            width: "100%",
            alignItems: "start",
            pt: { xs: 2, sm: 4 },
            px: { xs: 2, sm: 10 },
            gap: { xs: 4, md: 8 },
          }}
        >
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              width: "100%",
            }}
          >
            Product Info Mobile
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              width: "100%",
              maxWidth: { sm: "100%", md: 600 },
              maxHeight: "720px",
              gap: { xs: 5, md: "none" },
            }}
          >
            Graph and Table
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const mapStateToProps = (state: RootState) => ({
  products: state.products.products,
});

const mapDispatchToProps = {
  fetchProducts: () => fetchProducts(),
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ProductsDashboard);
