/* eslint-disable no-console */
import React, { useState } from 'react';
import 'firebase/auth';
import 'firebase/firebase-firestore';
import {
  Container,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { Link as LinkRouter, withRouter, useHistory } from 'react-router-dom';
import fb from '../../services/firebase';

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignUp(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const classes = useStyles();

  async function onRegister() {
    try {
      await fb
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
          alert('registrado com sucesso!!!');
          fb.firestore()
            .collection('user')
            .doc(res.user.uid)
            .set({
              nome: name,
            });
        });
      history.push('/');
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="top-margin">
      <Container component="main" maxWidth="xs">
        <div className="form-register">
          <CssBaseline />
          <Typography component="h1" variant="h5" color="primary">
            Efetuar Cadastro
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="Nome"
                  autoFocus
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
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
              </Grid>
            </Grid>
            <Button
              // type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={onRegister}
            >
              Cadastrar
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  <LinkRouter
                    to="/"
                    style={{ textDecoration: 'none', color: '#4B3B80' }}
                  >
                    Tem uma conta? Conecte-se
                  </LinkRouter>
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default withRouter(SignUp);
