import React from "react";
import { Button } from "../components/ui/button";
import TextField from '@mui/material/TextField';
import { Card, Typography } from '@mui/material';
import axios from "axios";

import {useNavigate } from "react-router-dom";

function Signup() {
  
  const [username,setusername] = React.useState("")
  const [password,setpassword] = React.useState("")
  const Navigate = useNavigate()

  return (
    <div style={{ padding: 100 }}>
      <div style={
        { marginTop: 80,
          display: "flex",
          justifyContent: "center" }}>
        <Typography variant="h6">Welcome Back, Login below</Typography>
      </div>
      <div style={
      { display: "flex",
        justifyContent: "center",
        marginTop: 20 }}>
        <Card sx={{ minWidth: 275 }} style={{ 
          width: 400,
          padding: 20 }}>
          <TextField fullWidth={true} id="filled-basic" label="Email" variant="filled" onChange={e=>{
            setusername(e.target.value)
          }} />
          <br /><br />
          <TextField fullWidth={true} id="filled-basic" label="Password" variant="filled" onChange={e=>{
            setpassword(e.target.value)
          }} />
          <br /><br />
          <Button onClick={
            
            async () => {
              const response = await axios.post("http://localhost:3000/admin/login", { username: username, password: password });
              let data = response.data;
              console.log(data);

              localStorage.setItem("token", data.token);
              Navigate('/courses');
              
    
          }}>Signup</Button>

        </Card>
      </div>
    </div>
  );
}

export default Signup;


