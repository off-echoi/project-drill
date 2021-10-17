import { useEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect, useLocation } from 'react-router-dom'
import Routes from '../pages'

const Root = () => {
  // const { pathname } = useLocation()

  // useEffect(() => {
  //   document.body.scrollTop = 0
  // }, [pathname])

  return (
    <BrowserRouter>
      <Switch>
        {Routes.map(({ path, component, exact }, idx) => {
          return (
            <Route path={path} exact={exact ? true : false} key={idx}>
              {component}
            </Route>
          )
        })}
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  )
}
export default Root
