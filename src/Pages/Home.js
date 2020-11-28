import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../Images/welcome.svg'
import Header from './Header/Header'
import Footer from './Footer/Footer'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <img src={logo} className="banner" />
      <h1 className="title_home">Conheça nosso trabalho</h1>
      <div className="content">
        <p className="text_home">Sejam Bem Vindos</p>
        <p className="text_home" style={{ color: "gray", marginBottom: 50 }}>Este site tem como objetivo reunir todos os dados do seu pet e de seus responsáveis para criar uma carteira virtual, onde futuramente você poderá cadastrar vacinas já realizadas e vacinas que ainda não foram realizadas em seu pet, consultas e anexar os exames e resultados bem como remédios que seu pet necessita e até mesmo os que ele já tomou ao longo de sua vida.</p>
      </div>
      <div className="footer_home">
        <Footer />
      </div>
    </div>
  );
}