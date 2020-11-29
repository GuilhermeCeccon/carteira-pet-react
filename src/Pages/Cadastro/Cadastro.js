import React, { useState } from 'react';
import { Button, Grid, TextField, Paper } from '@material-ui/core';
import Firebase from '../../services/FirebaseConnect'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { useHistory } from "react-router-dom";
import './cadastro.css'

export default function ModalCadastro() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  let history = useHistory();

  const cadastro = () => {
    Firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      history.push("/login");
    })
    .catch((err) =>{
      console.log(err)
    })
  }

    return (
      <div>
      <Header />
        <Grid container className="container">
          <Grid item sm={6} xs={12} className="container_cadastro">
            <h1 style={{ textAlign: "center" }}>Cadastro</h1>
            <Paper elevation={0}>
              <TextField
                label="E-mail"
                variant="outlined"
                size="small"
                type="email"
                id="emailCadastro"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: "100%", marginBottom: 10 }} />
              <TextField
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Senha"
                id="senhaCadastro"
                variant="outlined"
                type="password"
                size="small"
                style={{ width: "100%", marginBottom: 10 }}
              />
              <Button
                onClick={cadastro}
                variant="outlined"
                style={{ width: "100%", border: "1px solid #D3D3D3" }}>
                Cadastrar
              </Button>
            </Paper>
          </Grid>
        </Grid>
      <Footer />
      </div>
    );
}