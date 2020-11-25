import React, { useState } from 'react';
import { Button, Grid, TextField, Paper } from '@material-ui/core';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import './contato.css'

export default function ModalCadastro() {

  return (
    <div>
      <Header />
      <Grid container className="container">
        <Grid item sm={6} xs={12} className="container_cadastro">
          <h1 style={{ textAlign: "center" }}>Cadastro</h1>
          <Paper elevation={0}>
            <TextField
              label="Nome"
              variant="outlined"
              size="small"
              type="name"
              id="nomeCadastro"
              style={{ width: "100%", marginBottom: 10 }} />
            <TextField
              label="E-mail"
              variant="outlined"
              size="small"
              type="email"
              id="emailCadastro"
              style={{ width: "100%", marginBottom: 10 }} />
            <TextField
              label="Cidade"
              variant="outlined"
              size="small"
              type="email"
              id="cidadeCadastro"
              style={{ width: "100%", marginBottom: 10 }} />
            <TextField
              label="Senha"
              id="senhaCadastro"
              variant="outlined"
              type="password"
              size="small"
              style={{ width: "100%", marginBottom: 10 }}
              />
            <TextField
              label="Confirme sua senha"
              variant="outlined"
              type="password"
              size="small"
              style={{ width: "100%", marginBottom: 10 }}
            />
            <Button
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