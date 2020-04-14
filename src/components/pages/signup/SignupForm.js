import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        www.mycoa.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10%",
  },
  resize: {
    fontSize: 20,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignupForm() {
  const classes = useStyles();
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        phone_number: phone,
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          localStorage.token = data.jwt;
          localStorage.email = data.user.email;
          localStorage.id = data.user.id;
          // this.props.getProfile();
          setFirstName("");
          setLastName("");
          setPhone("");
          setEmail("");
          setPassword("");
          history.push("/admin/inbox");
          window.location.reload(false)
        } else {
          alert("You need to upload a photo");
        }
      });
  };

  // handleChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h3">
          Add New User
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="standard"
                InputProps={{
                  classes: {
                    input: classes.resize,
                  },
                }}
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="standard"
                InputProps={{
                  classes: {
                    input: classes.resize,
                  },
                }}
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                InputProps={{
                  classes: {
                    input: classes.resize,
                  },
                }}
                required
                fullWidth
                id="phoneNumber"
                label="Phone Number"
                name="phoneNumber"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                InputProps={{
                  classes: {
                    input: classes.resize,
                  },
                }}
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                InputProps={{
                  classes: {
                    input: classes.resize,
                  },
                }}
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Admin?"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Add
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

// state = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   phoneNumber: "",
//   password: ""
// };

// handleSubmit = e => {
//   e.preventDefault();
//   fetch("http://localhost:3000/signup", {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       first_name: this.state.firstName,
//       last_name: this.state.lastName,
//       phone_number: this.state.phoneNumber,
//       email: this.state.email,
//       password: this.state.password
//     })
//   })
//     .then(res => res.json())
//     .then(data => {
//       if (!data.errors) {
//         localStorage.token = data.jwt;
//         localStorage.email = data.user.email;
//         localStorage.id = data.user.id;
//         this.props.getProfile();
//         this.props.history.push("/profile");
//       } else {
//         alert("You need to upload a photo");
//       }
//     });
// };

// handleChange = e => {
//   this.setState({ [e.target.name]: e.target.value });
// };
