import { Box, Button , Typography } from "@mui/material";
import { AuthContext } from "../../App";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const {setIsAuth} = useContext(AuthContext)
  const navigate = useNavigate();
  const [isChecked , setIsChecked ] = useState(localStorage.getItem("isChecked") || false)
  const [formData, setFormData] = React.useState({
    username: localStorage.getItem("username") || "",
    password: localStorage.getItem("password") || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.username === "super_admin" && formData.password === "admin"){
      localStorage.setItem("username",formData.username);
      setIsAuth(true)
      localStorage.setItem("isAuth",true)
      navigate("/");
    }else {
      alert("Invalid username or password");
    }
    if(isChecked) {
      localStorage.setItem("username",formData.username);
      localStorage.setItem("password",formData.password);
      localStorage.setItem("isChecked",isChecked);
    }else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      localStorage.removeItem("isChecked");
    }
  };
  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        height: "100vh",
        backgroundColor: "#fff",
        left: 0,
        top: 0,
        display: "flex",
        alignItems: "center",
        zIndex: 99,
      }}
    >
      <Box
        sx={{
          flex: { xs: 1, md: 2 },
          margin: "2rem 0 2rem 2rem",
          height: "calc(100vh - 4rem)",
          borderRadius: "12px",
          position: "relative",
          backgroundColor: "#f8f7fa",
          display: { xs: "none", sm: "flex" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/illustrations/auth-login-illustration-light.png"
          alt=""
          style={{
            maxWidth: "100%",
            width: "390px",
            maxHeight: "65%",
            margin: "3rem 0",
          }}
        />
      </Box>
      <Box
        p={4}
        sx={{
          flex: 1,
          "& label": {
            color: "#5d596c",
          },
        }}
      >
        <Box>
          <Typography
            variant="h3"
            fontWeight={600}
            sx={{ color: "#5d596c", marginBottom: "10px" }}
          >
            Welcome to Fashion! 👋
          </Typography>
          <Typography
            variant="p"
            sx={{
              color: "#5d596c",
              fontSize: "16px",
              marginBottom: "20px",
              display: "inline-block",
            }}
          >
            Please sign-in to your account and start the adventure
          </Typography>
        </Box>
        <form action="" onSubmit={handleSubmit}>
          <Box
            sx={{
              "& input": {
                width: "100%",
                marginBottom: "15px",
                padding: "10px 15px",
                borderRadius: "8px",
                outline: "none",
                border: "1px solid #ccc",
              },
              "& label": {
                color: "#5d596c",
                fontSize: "14px",
                display: "inline-block",
                marginBottom: "5px",
              },
            }}
          >
            <label htmlFor="username">Email Or password</label>
            <input
              id="username"
              value={formData.username}
              type="text"
              placeholder="Enter Email or Password"
              onChange={(e)=>setFormData({...formData,username:e.target.value})}
            />
            <div style={{ display: "flex ", justifyContent: "space-between" }}>
              <label htmlFor="password">Password</label>
              <Link style={{ fontSize: "14px" }}>Forget Password</Link>
            </div>
            <input
              id="password"
              type="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />

            <Box sx={{ display: "flex", alginItems: "center", gap: "5px" }}>
              <input
                type="checkbox"
                id="check"
                style={{ width: "15px", height: "21px", marginBottom: "0" }}
                checked={isChecked}
                onChange={(e)=>setIsChecked(e.target.checked)}
              />
              <label htmlFor="check">Remember Me</label>
            </Box>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#7367f0",
                color: "#fff",
                width: "100%",
                marginTop: "20px",
              }}
            >
              Sign In
            </Button>
          </Box>
          <p
            style={{ color: "#6f6d7e", marginTop: "15px", textAlign: "center" }}
          >
            New on our platform?<a href="/"> Create an account</a>
          </p>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
