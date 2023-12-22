
import React from "react";
import { Avatar, Box, Button, TextField, Typography, colors } from "@mui/material";
const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__container">
        <Box sx={{display:'flex' , flexDirection:{xs:'column',md:'row'}}}>
          <Box
            sx={{
              padding: "40px",
              textAlign: "center",
              alignItems: "center !important",
              display: "flex",
              flexDirection: "column",
              alignSelf:{xs:'center', md:'self-start'},
              flex:1
            }}
          >
            <Typography
              variant="p"
              sx={{ color: "#666666", fontSize: "19px", mb: "10px" }}
            >
              Profile
            </Typography>
            <Avatar sx={{ width: "100px", height: "100px", mb: "5px" }}>
              <img
                width={90}
                height={90}
                sx={{
                  objectFit: "cover",
                }}
                src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="avatar"
              />
            </Avatar>
            <Box sx={{ mb: "10px" ,mt:'5px'}}>
                <h4>John Doe</h4>
                <h5 style={{ fontWeight: "normal" }}>Admin</h5>
              </Box>
            <Button
              variant="contained"
              color="secondary"
              sx={{ textTransform: "capitalize" }}
            >
              Chang Avatar
            </Button>
          </Box>
          <Box
            sx={{
              padding: "30px 22px",
              flex:4,
              height:'fit-content',
            }}
          >
            <Typography
              variant="p"
              sx={{
                fontSize: "20px",
                fontWeight: 500,
                color: "#666666",
                marginBottom: "20px",
                display: "inline-block",
              }}
            >
              Edit Details
            </Typography>
            <form action="">
              <Box display="grid" gap="20px">
                <TextField
                  label="First Name"
                  placeholder="admin"
                  sx={{ gridColumn: { xs: "span 4", md: "span 2" } }}
                />
                <TextField
                  label="Last Name"
                  placeholder="admin"
                  sx={{ gridColumn: { xs: "span 4", md: "span 2" } }}
                />
                <TextField
                  label="Email"
                  placeholder="admin@gmail.com"
                  sx={{ gridColumn: "span 4"}}
                />
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "20px",
                    fontWeight: 500,
                    color: "#666666",
                    marginBottom: "20px",
                    display: "inline-block",
                  }}
                >
                  Change Password
                </Typography>
                <TextField label="Password" sx={{ gridColumn: "span 4" }} />
                <TextField
                  label="Confirm Passwod"
                  sx={{ gridColumn: "span 4" }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ textTransform: "capitalize", width: "fit-content" }}
                >
                  Save
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Profile;
