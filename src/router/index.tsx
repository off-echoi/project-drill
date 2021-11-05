import { useEffect } from 'react'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import Routes from '@/pages'

const Root = () => {
  // const { pathname } = useLocation()

  // useEffect(() => {
  //   document.body.scrollTop = 0
  // }, [pathname])

  return (
    <Switch>
      {Routes.map(({ path, component, exact }, idx) => {
        return <Route path={path} exact={exact ? true : false} key={idx} component={component} />
      })}
      <Redirect from="*" to="/" />
    </Switch>
  )
}
export default Root
