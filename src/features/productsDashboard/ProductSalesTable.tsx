import { Card, Skeleton } from "@mui/material";
import { Product } from "./productsSlice";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { DisplayType } from "./const";

const columns: GridColDef[] = [
  {
    field: "weekEnding",
    headerName: "Week Ending",
    type: "string",
    flex: 1,
  },
  { field: "retailSales", headerName: "Retail Sales", type: "number", flex: 1 },
  {
    field: "wholesaleSales",
    headerName: "Wholesale Sales",
    type: "number",
    flex: 1,
  },
  {
    field: "unitsSold",
    headerName: "Units Sold",
    type: "number",
    flex: 1,
  },
  {
    field: "retailerMargin",
    headerName: "Retailer Margin",
    type: "number",
    flex: 1,
  },
];

const ProductSalesTable = ({
  product,
  displayType,
}: {
  product?: Product;
  displayType: DisplayType;
}) => {
  if (!product) {
    return <Skeleton variant="rectangular" height={500} width="100%" />;
  }

  const rows = product.sales.map((x, i) => ({
    ...x,
    id: i,
  }));

  return (
    <Card style={{ height: 632, width: "100%" }}>
      {/* Mobile Table */}
      <DataGrid
        rows={rows}
        columns={columns.filter(
          (col) => col.field === "weekEnding" || col.field === displayType
        )}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10, 25, 50, 100]}
        sx={{ display: { xs: "flex", md: "none" } }}
      />
      {/* Mobile Table */}
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10, 25, 50, 100]}
        sx={{ display: { xs: "none", md: "flex" } }}
      />
    </Card>
  );
};

export default ProductSalesTable;
