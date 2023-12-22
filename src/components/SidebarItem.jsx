import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";
import React from "react";
import { MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { tokens } from "../theme";

const SidebarItem = ({
  title,
  to,
  icon,
  selected,
  setSelected,
  isCollapsed,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Link to={to}>
      <MenuItem
        active={selected === title}
        style={{
          color: colors.grey[100],
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        {!isCollapsed && <Typography variant="h6">{title}</Typography>}
      </MenuItem>
    </Link>
  );
};

export default SidebarItem;
