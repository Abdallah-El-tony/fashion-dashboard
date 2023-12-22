import { Box, IconButton, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { orders } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { useState } from "react";

const Orders = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [ordersData,setOrdersData] = useState(orders)

  const handleDelete = (id) => {
    setOrdersData(ordersData.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: "ID", flex: 0.1 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <Typography variant="h5">{row.name}</Typography>
              <Typography
                variant="p"
                sx={{ fontSize: "14px", fontWeight: "200 !important" }}
              >
                {row.email}
              </Typography>
            </Box>
          </Box>
        );
      },
    },
    { field: "totalAmount", headerName: "Total Amount", flex: 1 },
    {
      field: "orderCreated",
      headerName: "Order Crated",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Order Status",
      headerAlign: "left",
      flex: 1,
    },
    {
      field: "action",
      headerName: "Actions",
      flex: 1,
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
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>
      <Box
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
            padding: "20px 0",
            border: "none !important",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
            padding: "20px 0",
            border: "none !important",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-row": {
            minHeight: "60px !important",
            borderBottom: "1px solid #ccc",
            lineHeight: "13px",
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
          rows={ordersData}
          columns={columns}
          checkboxSelection
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Orders;
