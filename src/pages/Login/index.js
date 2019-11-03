import React from 'react';
import {
  // Container,
  Button,
  Paper,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Typography,
  makeStyles,
} from '@material-ui/core';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { Link as LinkRouter } from 'react-router-dom';
import './style.css';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100px',
    width: '900px',
  },
  image: {
    backgroundImage:
      'url(https://scproduction.s3.sa-east-1.amazonaws.com/wysiwyg_uploads/cms/images/2019/05/28/12/como-fazer-a-prestacao-de-contas-em-condominios-saiba-aqui-z3uqcw97.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
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

export default function SignInSide() {
  const classes = useStyles();

  return (
    <div className="form-login">
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Typography component="h1" variant="h5" color="primary">
              Login
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <LinkRouter to="/profile" style={{ textDecoration: 'none' }}>
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
              </LinkRouter>
              <Grid container>
                <Grid item>
                  <Link href="#" variant="body1">
                    Esqueceu a senha?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body1">
                    <LinkRouter
                      to="/register"
                      style={{ textDecoration: 'none', color: '#4B3B80' }}
                    >
                      Não tem uma conta? Cadastre-se
                    </LinkRouter>
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
