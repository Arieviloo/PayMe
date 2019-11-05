import React, { useState } from 'react';
import 'firebase/auth';
import 'firebase/firebase-firestore';
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
  // MODAL SENHA
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@material-ui/core';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { Link as LinkRouter, withRouter, useHistory } from 'react-router-dom';
import fb from '../../services/firebase';
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

function SignInSide() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const classes = useStyles();
  {
    /* PROPS ESQUECEU A SENHA */
  }
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function login(props) {
    try {
      fb.auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => {
          console.log('auth', res.user.email);
          localStorage.setItem('uid', res.user.uid);
          localStorage.setItem('username', res.user.email);

          history.push('/profile');
          // props.history.push({
          //   pathname: '/profile',
          // });
        });
    } catch (error) {
      alert(error.message);
    }
  }

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
                value={email}
                onChange={e => setEmail(e.target.value)}
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
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <Link to="/profile" style={{ textDecoration: 'none' }}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={login}
                >
                  <VpnKeyIcon />
                  Entrar
                </Button>
              </Link>
              <Grid container>
                <Grid item>
                  <Link
                    href="#"
                    variant="body1"
                    style={{ textDecoration: 'none', color: '#4B3B80' }}
                    onClick={handleClickOpen}
                  >
                    Esqueceu a senha?
                  </Link>
                  {/* MODAL ESQUECEU A SENHA */}
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="form-dialog-title"
                  >
                    <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        Digite o email cadastrado e nós enviaremos um link para
                        recuperação de senha.
                      </DialogContentText>
                      <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                      />
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose} color="primary">
                        Cancel
                      </Button>
                      <Button onClick={handleClose} color="primary">
                        Subscribe
                      </Button>
                    </DialogActions>
                  </Dialog>
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

export default withRouter(SignInSide);
