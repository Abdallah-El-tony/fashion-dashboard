import { Box, Button, IconButton, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { Add, Delete, Edit } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // fetch products
  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://localhost:3000/AllProducts")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    };
    fetchData()
  },[]);

  const handleDelete = (id) => {
    setProducts(products.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", flex: 0.1 },
    {
      field: "product",
      headerName: "Product",
      flex: 3,
      renderCell: (params) => {
        return (
          <Box display="flex" gap="10px" alignItems="center">
            <img
              src={params.row.img}
              style={{ borderRadius: "5px" , objectFit:'cover' }}
              width={70}
              height={55}
              alt="product-img"
              
            />
            <Typography sx={{ color: colors.greenAccent[300] }}>
              {params.row.name}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "sales",
      headerName: "StockQty",
      flex: 1,
    },
    {
      field: "action",
      headerName: "Actions",
      renderCell: (params) => {
        return (
          <Box display="flex" gap="3px">
            <IconButton>
              <Edit />
            </IconButton>
            <IconButton onClick={()=>handleDelete(params.row.id)}>
              <Delete />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      {/* HEADER */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
      >
        <Header title="Products" subtitle="List of All Products" />

        <Box>
          <Button
            onClick={() => navigate("/products/new")}
            variant="outlined"
            color="secondary"
            sx={{ fontSize: "15px" }}
            startIcon={<Add />}
          >
            Add New Product
          </Button>
        </Box>
      </Box>

      <Box
        height="100vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
            minHeight: "80px !important",
            border: "none !important",
          },
          "& .MuiDataGrid-row": {
            minHeight: "80px !important",
            borderBottom: "1px solid #ccc",
            lineHeight: "18px",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
            minHeight: "80px !important",
            border: "none !important",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={products}
          columns={columns}
          checkboxSelection
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Products;
