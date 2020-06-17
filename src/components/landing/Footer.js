import React from 'react';
import { Typography, Container, Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';



const useStyles = makeStyles(theme => ({
  container: {
    minHeight: "20vh",
    flexGrow: 1,
    alignContent: "center"
  },
  copy: {
    textAlign: "center",
    marginTop: "90px"
    
  },
  topGrid: {
    // border: "solid 1px black",
    marginTop: "20px"
  },
  socialGrid: {
    // border: "solid 1px blue",
    justifyContent: "center"
  },
  termsGrid: {
    // border: "solid 1px red",
    justifyContent: "center"
  },
  textLink: {
    fontSize: '1.2rem',
    verticalAlign: 'sub'
  }
}));

const Footer = () => {
  const classes = useStyles()
  return (
    <Container className={classes.container}>
      <Grid container className={classes.topGrid} spacing={3}>
      <Grid item container xs={6} className={classes.socialGrid} spacing={3}>
        <Grid item>
        <IconButton color="primary" aria-label="Facebook" component="span">
          <FacebookIcon fontSize="large"/>
        </IconButton>
        </Grid>
        <Grid item>
        <IconButton color="primary" aria-label="Instagram" component="span">
          <InstagramIcon fontSize="large"/>
        </IconButton>
        </Grid>
        <Grid item >
        <IconButton color="primary" aria-label="Twitter" component="span" >
          <TwitterIcon fontSize="large"/>
        </IconButton>
        </Grid>
      </Grid>
      <Grid item container xs={6} className={classes.termsGrid} spacing={6}>
        <Grid item>
          <Typography className={classes.textLink}>Contact</Typography>
        </Grid>
        <Grid item>
          <a href="/"><Typography className={classes.textLink}>Privacy</Typography></a>
        </Grid>
        <Grid item>
          <Typography className={classes.textLink}>Terms and Conditions</Typography>
        </Grid>
      </Grid>
      
      </Grid>
     
      <Typography className={classes.copy}>©2020 All Rights Reserved</Typography>
    </Container>
  );
};

export default Footer;