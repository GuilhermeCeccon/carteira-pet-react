import React, { useState } from 'react';
import { Button, Grid, TextField, Paper } from '@material-ui/core';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Firebase from '../../services/FirebaseConnect'
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

import './contato.css'

export default function Contato() {

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [assunto, setAssunto] = useState("")
  const [mensagem, setMensagem] = useState("")
  const [msg, setMsg] = useState("")

  let history = useHistory();

  const limpar = () => {
    setNome("")
    setEmail("")
    setAssunto("")
    setMensagem("")
    setMsg("")
}

const salvarMensagem = () => {
    let objeto = {
        nome: nome,
        email: email,
        assunto: assunto,
        mensagem: mensagem
    }

    let code = uuidv4()

    Firebase
        .database()
        .ref(`email/${code}`)
        .set(objeto)
        .then(() => {
            limpar()
            setMsg("Mensagem Enviada com Sucesso!")
            setInterval(() => {
              history.push("/");
            }, 1000);
        })
        .catch((err) => {
          setMsg("Erro ao enviar, tente novamente mais tarde.")
        })
    }

  return (
    <div>
      <Header />
      <Grid container className="container">
        <Grid item sm={6} xs={12} className="container_cadastro">
          <h1 style={{ textAlign: "center" }}>Contato</h1>
          <Paper elevation={0}>
            <TextField
              label="Nome"
              variant="outlined"
              size="small"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              style={{ width: "100%", marginBottom: 10 }} />
            <TextField
              label="E-mail"
              variant="outlined"
              size="small"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%", marginBottom: 10 }} />
            <TextField
              label="Asunto"
              variant="outlined"
              size="small"
              value={assunto}
              onChange={(e) => setAssunto(e.target.value)}
              style={{ width: "100%", marginBottom: 10 }}
              />
            <TextField
              label="Mensagem"
              variant="outlined"
              size="small"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              style={{ width: "100%", marginBottom: 10 }}
            />
            <Grid item sm={12} xs={12} style={{ textAlign: "center", color: "green", marginBottom: 5, fontSize: 16 }}> 
              {msg}
            </Grid>
            <Button
              variant="outlined"
              onClick={salvarMensagem}
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