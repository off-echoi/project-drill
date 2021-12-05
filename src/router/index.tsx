import { Switch, Route, Redirect } from 'react-router-dom'
import Routes from '@/pages'
import Main from '@/pages/00_Main/Main'

interface IRouteIndex {
  isLogged: boolean
}
function RouteIndex({ isLogged }: IRouteIndex) {
  return (
    <Switch>
      {isLogged ? (
        <>
          {Routes.map(({ path, component, exact }, idx) => {
            return <Route path={path} exact={exact ? true : false} key={idx} component={component} />
          })}
        </>
      ) : (
        <Route path="/" exact={true} component={Main} />
      )}
      <Redirect from="*" to="/" />
    </Switch>
  )
}
export default RouteIndex
