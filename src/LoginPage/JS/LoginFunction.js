import React from "react";
import { TextField, Grid, Container, Typography, Checkbox} from "@material-ui/core"
import {signin} from "../../Api/ApiService";
import { makeStyles } from "@material-ui/styles";
import "../CSS/LoginFunction.css"



const useStyles = makeStyles({
 input: {
    background: "rgb(243,243,243)",
  
  },
});


const LoginFunction = () => {
  
   const classes = useStyles();


    const handleSubmit = (event) => {

      event.preventDefault();
      const data = new FormData(event.target);
      const email = data.get("email");
      const password = data.get("password");
      // ApiService의 signin 메서드를 사용 해 로그인.
      signin({ email: email, password: password });
      
    };
  
    return (
      <div className="rootContiner">
      
    <Container component="main" maxWidth="xs" className ="Container">
      <div className="MainContent">
        <div className="LoginTypographydiv">
          <Grid container spacing={2} className="Content">
            <Grid item xs={12}>
              <Typography component="h1" variant="h5">
                <p className="sign_in_font">Sign in</p>
              </Typography>
            </Grid>
        </Grid>
        </div>
    

        <form  onSubmit={handleSubmit}>
          {" "}
          {/* submit 버튼을 누르면 handleSubmit이 실행됨. */}
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="아이디 또는 이메일"
                name="email"
                autoComplete="email"  
                inputProps={{ className: classes.input }}
        
                
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="비밀번호"
                type="password"
                id="password"
                autoComplete="current-password"
                inputProps={{ className: classes.input }}
           
                
                
              />
            </Grid>
            <div className="LoginState">
                  <Checkbox defaultChecked checked size="small"  color="success" />
                  <p className="LoginStatefont">로그인 상태유지</p>

            </div>
            <div className="Logindiv">
           
                
                
                  <button id="login_btn" type="submit"  variant="contained" color="primary" >
                   Login
                  </button>
                
              
            </div>
           
              
            
            
          </Grid>
        </form>






      </div>
          
       
    </Container>
      </div>
      
    );
  };
  export  default LoginFunction; 