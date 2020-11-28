
import React, { useLayoutEffect, useState } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import Login from '../src/Pages/Login/Login'
import Cadastro from '../src/Pages/Cadastro/Cadastro'
import Menu from './Pages/Menu'
import Home from './Pages/Home'
import Contato from '../src/Pages/Contato/Contato'
import Firebase from './services/FirebaseConnect'
export default function App() {

  const [user, setUser] = useState(null)

  useLayoutEffect(() => {
    Firebase
      .auth()
      .onAuthStateChanged(user => {
        if (user !== null) {
          setUser(user.uid)
        } else {
          setUser(null)
        }
      })

  }, [])

  const PrivateRoute = ({ component: Component}) => {

    return <Route
      render={(props => {
        if (user) {
          return <Component {...props} />
        } else {
          return <Redirect to={{ pathname: "/" }} />
        }
      })}

    />
  }

  return (
    <HashRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/contato" component={Contato} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/" exact={true} component={Home} />
        <PrivateRoute path="/menu" component={Menu} />
      </Switch>
    </HashRouter>
  )
}
