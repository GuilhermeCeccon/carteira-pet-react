import React, { useState, useLayoutEffect } from 'react'

import {
    Button,
    Grid,
    Paper,
    TextField,
    Checkbox
}
    from '@material-ui/core';
import Firebase from '../../services/FirebaseConnect'
import { useHistory } from "react-router-dom";
import ImgLogin from '../../Images/login.svg'
import './login.css';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Login() {

  const redirect = () => {
    history.push('/cadastro')
  }

    let history = useHistory();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [msg, setMsg] = useState("")
    const [lembreme, setLembreme] = useState(false)

    useLayoutEffect(() => {

        let emailStorage = localStorage.getItem("email")
        let passwordStorage = localStorage.getItem("password")
        if (emailStorage && passwordStorage) {
            setEmail(emailStorage)
            setPassword(passwordStorage)
            setLembreme(true)
        }
    }, [])

    const login = () => {

        if (lembreme == false) {
            localStorage.removeItem("email")
            localStorage.removeItem("password")
        }

        Firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((retorno) => {
                sessionStorage.setItem("uuid", retorno.user.uid)
                if (lembreme === true) {
                    localStorage.setItem("email", email)
                    localStorage.setItem("password", password)
                }
                setMsg("")
                history.push("/menu");

            })
            .catch((erro) => {
                console.log(erro)
                setMsg("Usuário ou senha inválidos!")
            })
    }
    
    return (
      <div>
        <Header />
        <Grid container className="container_login">
          <Grid item sm={6} xs={12} className="box_img">
            <img src={ImgLogin} className="img_login"/>
          </Grid>
            <Grid item sm={3} xs={12} className="login">
              <Paper elevation={0}>
                <p>Faça seu Login</p>
                  <TextField
                    label="E-mail"
                    variant="outlined"
                    size="small"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: "100%", marginBottom: 10 }}
                    className="form_login" />
                  <TextField
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    label="Senha"
                    variant="outlined"
                    type="password"
                    size="small"
                    style={{ width: "100%", marginBottom: 10 }}
                    className="form_login" />
                  <Grid item sm={12} xs={12} style={{ textAlign: "center" }}>
                    <Checkbox
                      checked={lembreme}
                      onChange={(e) => setLembreme(e.target.checked)}
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    /> Lembre-me
                  </Grid>
                  <Grid item sm={12} xs={12} style={{ textAlign: "center", color: "red", marginBottom: 5, fontSize: 12 }}>
                    {msg}
                  </Grid>
                  <Grid item sm={12} xs={12} style={{ textAlign: "center", marginBottom: 10 }}>
                    <Button
                      onClick={login}
                      variant="outlined"
                      color="primary"
                      className="button">
                        Entrar
                    </Button>
                  </Grid>
                  <Grid item sm={12} xs={12} style={{ textAlign: "center" }}>
                    <Button
                      onClick={redirect}
                      variant="outlined"
                      color="primary"
                      className="button">
                        Cadastre-se
                    </Button>
                  </Grid>
              </Paper>
            </Grid>
          </Grid>
          <Footer />
      </div>
    );
}

export default Login;