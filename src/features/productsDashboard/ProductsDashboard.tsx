import { Box, Grid } from "@mui/material";
import Navbar from "../../common/Navbar";
import ProductInfoCard from "./ProductInfoCard";
import { ConnectedProps, connect, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { useEffect, useState } from "react";
import { fetchProducts } from "./productsSlice";
import ProductSalesGraph from "./ProductSalesGraph";
import ProductSalesTable from "./ProductSalesTable";
import { DisplayType } from "./const";

const ProductsDashboard = (props: PropsFromRedux) => {
  useEffect(() => {
    if (props.products.length === 0) {
      props.fetchProducts();
    }
  }, []);
  const selectedProduct = props.products.at(0);

  const [selectedDisplayType, setSelectedDisplayType] =
    useState<DisplayType>("retailSales");

  return (
    <Box sx={{ height: "100%" }}>
      <Navbar />
      <Grid container sx={{ height: "100dvh", padding: 4 }}>
        <Grid
          item
          xs={12}
          sm={4}
          lg={3}
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
          <ProductInfoCard product={selectedProduct} />
        </Grid>
        <Grid
          item
          sm={12}
          md={8}
          lg={9}
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "100%",
            width: "100%",
            alignItems: "start",
            pt: { xs: 2, sm: 0 },
            pl: { sm: 5 },
            gap: { xs: 4, md: 8 },
          }}
        >
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              width: "100%",
            }}
          >
            <ProductInfoCard product={selectedProduct} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              width: "100%",
              maxWidth: { sm: "100%" },
              gap: { xs: 5, md: "none" },
            }}
          >
            <ProductSalesGraph
              product={selectedProduct}
              displayType={selectedDisplayType}
              setDisplayType={setSelectedDisplayType}
            />
            <ProductSalesTable
              product={selectedProduct}
              displayType={selectedDisplayType}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const mapStateToProps = (state: RootState) => ({
  products: state.products.products,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ProductsDashboard);
