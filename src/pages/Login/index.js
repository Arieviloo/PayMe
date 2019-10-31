import React from 'react';
import {
  Container,
  Button,
  Avatar,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Typography,
  makeStyles,
} from '@material-ui/core';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import './style.css';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <Container component="main" className="bg" maxWidth="xs">
      <CssBaseline />
      <div className="form">
        <Typography component="h1" variant="h5" color="primary">
          Login
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="dense"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="dense"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            <VpnKeyIcon />
            Entrar
          </Button>
          <Grid container>
            <Grid item>
              <Link href="#" variant="body1">
                Esqueceu a senha?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body1">
                Não possui uma conta? Cadastre-se!
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
