import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from "@mui/icons-material";
import { tokens } from "../../theme";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";

// ** data
import { mockDataTeam } from "../../data/mockData";
const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "access",
      flex:1,
      headerName: "Access",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="100%"
            m="0 auto"
            p='5px'
            display="flex"
            justifyContent="center"
            borderRadius="4px"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : colors.greenAccent[700]
            }
          >
            {access === "admin" && <AdminPanelSettingsOutlined/>}
            {access === "manager" && <SecurityOutlined/>}
            {access === "user" && <LockOpenOutlined/>}
            <Typography color={colors.grey[100]} sx={{ml:'5px'}}>{access}</Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <Box>
        <Header title='Team' subtitle='Manage Team'/>
        <Box 
            mt='30px'
            height='75vh'
            sx={{
              "& .MuiDataGrid-root":{
                border:'none'
              },
              "& .MuiDataGrid-cell":{
                border:'none'
              },
              "& .name-column--cell":{
                color:colors.greenAccent[300]
              },
              "& .MuiDataGrid-columnHeaders":{
                backgroundColor:colors.blueAccent[700],
                borderBottom:'none'
              },
              "& .MuiDataGrid-virtualScroller":{
                backgroundColor:colors.primary[400]
              },
              "& .MuiDataGrid-footerContainer":{
                backgroundColor:colors.blueAccent[700]
              }
            }}
        >
          
            <DataGrid rows={mockDataTeam}  columns={columns}/>

        </Box>
    </Box>
  )
};

export default Team;
