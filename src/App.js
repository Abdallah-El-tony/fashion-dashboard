// ** mui imports
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createContext, useEffect } from "react";

// ** react router
import { Routes, Route } from "react-router";


// ** components
import Navbar from "./views/layout/Navbar";
import Dashboard from "./views/dashboard";
import Team from "./views/team";
import Sidebar from "./views/layout/Sidebar";
import Invoices from "./views/Invoices";
import Form from "./views/form";
import FAQ from "./views/faq";
import Bar from "./views/bar";
import Pie from "./views/pie";
import Line from "./views/line";
import Geography from "./views/geograyphy";
import Users from "./views/users";
import Products from "./views/products";
import Orders from "./views/orders";
import NewProduct from "./views/products/new-product";
import Login from "./views/login";

// ** hooks
import { useState } from "react";
import Profile from "./views/profile";

export const AuthContext = createContext(false);

export default function App() {
  const [isAuth , setIsAuth] = useState(false)
  const [theme, colorMode] = useMode();
  const [ishideSidbar, setisHideSidbar] = useState(false);
  const [isSidebarCollapsed, setisSidebarCollapsed] = useState(false);

  const contextValues = {
    isAuth ,
    setIsAuth,
  }


  return (
   <AuthContext.Provider value={contextValues}>
     <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar
            setisSidebarCollapsed={setisSidebarCollapsed}
            isHided={ishideSidbar}
            setisHideSidbar={setisHideSidbar}
          />
          <main
            className="content"
            style={{
              marginLeft:'auto',
              width: ishideSidbar
                ? "100%"
                : isSidebarCollapsed
                ? `calc(100% - 80px)`
                : `calc(100% - 240px)`,
            }}
          >
            <Navbar isHided={ishideSidbar} setisHideSidbar={setisHideSidbar} setisSidebarCollapsed={setisSidebarCollapsed}/>
            <Routes>
              <Route path="/" index element={isAuth?<Dashboard />:<Login/>} />
              <Route path="/team" element={<Team />} />
              <Route path="/users" element={<Users />} />
              <Route path="/products">
                <Route index element={<Products slug="Products" />} />
                <Route path="new" element={<NewProduct />} />
              </Route>
              <Route path="/orders" element={<Orders />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geography" element={<Geography />} />
              <Route path='/login' element={<Login/>}/>
              <Route path='/profile' element={<Profile/>}/>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
   </AuthContext.Provider>
  );
}
