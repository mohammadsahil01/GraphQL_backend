import React from "react";

import TextField from '@mui/material/TextField';
import { Card, Typography } from '@mui/material';

// import {useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../graphql/mutations";

function Login() {

  const [email,setEmail] = React.useState("")
  const [password,setpassword] = React.useState("")
  // const Navigate = useNavigate()
  const [loginUser] = useMutation(LOGIN_USER); // Define loginUser mutation

  const handleLogin = async () => {
    try {
      const response = await loginUser({
        variables: { email, password }, // Pass email and password as variables
      });

      let data = response.data;
      console.log(data);
      localStorage.setItem("token",data.LoginUser)

      // Handle the response data or perform redirects as needed.
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ padding: 50 }}>
      <div style={
        { marginTop: 80,
          display: "flex",
          justifyContent: "center" }}>
        <Typography variant="h4">Welcome Back, Login below</Typography>
      </div>
      <div style={
      { display: "flex",
        justifyContent: "center",
        marginTop: 10 }}>
        <Card sx={{ minWidth: 250 }} style={{ 
          width: 350,
          padding: 20 }}>
          <TextField fullWidth={true} id="filled-basic" label="Email" variant="outlined" onChange={e=>{
            setEmail(e.target.value)
          }} />
          <br /><br />
          <TextField fullWidth={true} id="filled-basic" label="Password" variant="outlined" onChange={e=>{
            setpassword(e.target.value)
          }} />
          <br /><br />
          <Button onClick={handleLogin}>login</Button>

        </Card>
      </div>
    </div>
  );
}

export default Login;


