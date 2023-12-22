// ** mui
import {
  useTheme,
  Box,
  IconButton,
  InputBase,
  Badge,
  Divider,
  Avatar,
  MenuItem,
  Menu,
  ListItemIcon,
} from "@mui/material";

// ** theme
import { ColorModeContext, tokens } from "../../theme";

// ** react hooks
import { useContext, useState } from "react";

// ** mui icons
import {
  LightModeOutlined,
  Search,
  DarkModeOutlined,
  PersonOutlined,
  NotificationsOutlined,
  MailOutlineOutlined,
  Settings,
  LogoutOutlined,
} from "@mui/icons-material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";

const Navbar = ({ isHided, setisHideSidbar, setisSidebarCollapsed }) => {
  const navigate = useNavigate();
  const {setIsAuth} = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <Box display="flex" justifyContent="space-between" gap="10px">
      <IconButton
        sx={{ display: { xs: "block", sm: "none" } }}
        onClick={() => {
          setisHideSidbar(!isHided);
          setisSidebarCollapsed(true);
        }}
      >
        <MenuOutlinedIcon />
      </IconButton>
      {/* SEARSH */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
        p="5px 0 5px 10px"
        gap="10px"
      >
        <InputBase placeholder="Search..." sx={{ ms: 2, flex: 1 }} />
        <IconButton type="button" sx={{ p: 1 }}>
          <Search />
        </IconButton>
      </Box>
      {/* ICONS */}
      <Box display="flex" gap="10px">
        <IconButton onClick={() => colorMode.toggleColorMode()}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlined />
          ) : (
            <LightModeOutlined />
          )}
        </IconButton>
        <Box sx={{ display: { xs: "none", sm: "flex", gap: "10px" } }}>
          <IconButton>
            <Badge badgeContent={1} color="error">
              <NotificationsOutlined />
            </Badge>
          </IconButton>
          <IconButton>
            <Badge badgeContent={1} color="error">
              <MailOutlineOutlined />
            </Badge>
          </IconButton>
        </Box>
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar sx={{ width: "32px", height: "32px" }}>
            <img
              width={35}
              height={35}
              sx={{
                objectFit: "cover",
              }}
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </Avatar>
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={handleClose}>
            <Avatar sx={{ width: "32px", height: "32px" }} ml={5}>
              <img
                width={35}
                height={35}
                sx={{
                  objectFit: "cover",
                }}
                src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="avatar"
              />
            </Avatar>
            <Box sx={{ ml: "10px" }}>
              <h4>John Doe</h4>
              <h5 style={{ fontWeight: "normal" }}>Admin</h5>
            </Box>
          </MenuItem>
          <Divider />
          <MenuItem onClick={()=>navigate('/profile')}>
            <ListItemIcon>
              <PersonOutlined fontSize="small" />
            </ListItemIcon>
            My Profile
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <Divider/>
            <MenuItem onClick={()=>{setIsAuth(false) ; localStorage.setItem('isAuth' , false) ; navigate('/')}}>
              <ListItemIcon>
                <LogoutOutlined fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default Navbar;
