import { Box, Button, IconButton, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { Add, Delete, Edit } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const Users = () => {
  const [users, setUsers] = useState([]);
  
  // fetch products
  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://localhost:5000/api/users")
        .then((res) => res.json())
        .then((data) => setUsers(data));
    };
    fetchData();
  }, []);
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleDelete = (id) => {
    setUsers(users.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", flex: 0.1 },
    {
      field: "name",
      headerName: "Name",
      flex:1.2,
      renderCell: ({ row }) => {
        return (
          <Box display="flex" gap="3px" flexDirection='column'>
            <Typography variant="h5" sx={{fontWeight:200}}>
              {row.name}
            </Typography>
            <Typography variant="p" sx={{fontSize:'14px' , fontWeight:'200' , textAlign:'center'}}>
              {row.email}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "country",
      headerName: "Country",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex:1
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
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            onClick={() => navigate("/form")}
            variant="outlined"
            color="secondary"
            sx={{ fontSize: "15px" }}
            startIcon={<Add />}
          >
            Add New User
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
            border:"none !important"
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
            border:'none !important',
          },
          "& .MuiDataGrid-row": {
            minHeight: "60px !important",
            borderBottom: "1px solid #ccc",
            lineHeight: "13px",
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
          rows={users}
          columns={columns}
          checkboxSelection
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Users;
