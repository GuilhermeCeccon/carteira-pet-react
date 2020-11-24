import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Login from './Pages/Login'
import Menu from './Pages/Menu'
import Home from './Pages/Home'


export default function App() {

  const PrivateRoute = ({ component: Component}) => {

    return <Route
      render={(props => {
        let isAuthenticated = sessionStorage.getItem("uuid")
        if (isAuthenticated) {
          return <Component {...props} />
        } else {
          return <Redirect to={{ pathname: "/" }} />
        }
      })}

    />
  }


  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact={true} component={Login} />
        <Route path="/" exact={true} component={Home} />
        <PrivateRoute path="/menu" component={Menu} />

      </Switch>

    </BrowserRouter>
  )
}
