import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { setSelectedDateTime } from "../actions/product.action";
import emailjs from "emailjs-com";
import { useSelector } from "react-redux";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function EnterUserAddressFrom() {
  const classes = useStyles();
  const [userName, setUserName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");

  const selectedDateTime = useSelector((state) => {
    return state.selectedDateTime;
  });
  console.log(selectedDateTime);

  let nameHandler = (e) => {
    setUserName(e.target.value);
  };

  let lastNameHandler = (e) => {
    setUserLastName(e.target.value);
  };

  let emailHandler = (e) => {
    setUserEmail(e.target.value);
  };
  let phoneNumberHandler = (e) => {
    setUserPhone(e.target.value);
  };

  // it s form https://stackoverflow.com/questions/55795125/how-to-send-email-from-my-react-web-application
  function sendEmail(e) {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

    const emailObj = {
      to_name: userName,
      message: `We will be there on ${selectedDateTime}. If there are any changes, we'll text or call you.`,
      to_email: userEmail,
    };
    emailjs
      .send("gmail", "template_fzjsj1i", emailObj, "user_kcYuGdr5i3O47Pyjv3aMk")
      .then(
        (result) => {
          window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={nameHandler}
                autoComplete='fname'
                name='firstName'
                variant='outlined'
                required
                fullWidth
                id='firstName'
                label='First Name'
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={lastNameHandler}
                variant='outlined'
                required
                fullWidth
                id='lastName'
                label='Last Name'
                name='lastName'
                autoComplete='lname'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={emailHandler}
                variant='outlined'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={phoneNumberHandler}
                variant='outlined'
                required
                fullWidth
                name='phoneNumber'
                label='Phone Number'
                type='number'
                id='number'
              />
            </Grid>
          </Grid>
          <Button
            onClick={sendEmail}
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}>
            Continue
          </Button>
          <Grid container justifyContent='flex-end'></Grid>
        </form>
      </div>
    </Container>
  );
}
