import { DashboardCustomize, Person, ShoppingCart } from "@mui/icons-material";
import { Dashboard, Products, Users } from "../../pages";

export const navigations = [
  {
    path: "/",
    icon:<DashboardCustomize/>,
    element: <Dashboard color='primary'/>,
    name:'Dashboard'
  },
  {
    path: "/users",
    icon:<Person color='primary'/>,
    element: <Users/>,
    name:'Users'
  },
  {
    path: "/products",
    icon:<ShoppingCart color='primary'/>,
    element: <Products />,
    name:'Products'
  },
];

