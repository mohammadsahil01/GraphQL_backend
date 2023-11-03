import React from "react";

import TextField from '@mui/material/TextField';
import { Card, Typography } from '@mui/material';

// import {useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutations";

function Signup() {
  
  const [name,setName] = React.useState("")
  const [email,setEmail] = React.useState("")
  const [password,setpassword] = React.useState("")
  const [createUser] = useMutation(CREATE_USER)
  // const Navigate = useNavigate()

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
          <TextField fullWidth={true} id="filled-basic" label="Name" variant="outlined" onChange={e=>{
            setName(e.target.value)
          }} />
          <br /><br />
          <TextField fullWidth={true} id="filled-basic" label="Password" variant="outlined" onChange={e=>{
            setpassword(e.target.value)
          }} />
          <br /><br />
          <Button onClick={
            
            async () => {
              try{
              const response = await createUser({
                variables: { name, password,email},
              })
              let data = response.data;
              console.log(data);
            }catch(error){
              console.error("Error:",error)
            }
          }}>Signup</Button>

        </Card>
      </div>
    </div>
  );
}

export default Signup;


