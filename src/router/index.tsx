import { Switch, Route, Redirect } from 'react-router-dom'
import Routes from '@/pages'

function RouteIndex() {
  return (
    <Switch>
      {Routes.map(({ path, component, exact }, idx) => {
        return <Route path={path} exact={exact ? true : false} key={idx} component={component} />
      })}
      <Redirect from="*" to="/" />
    </Switch>
  )
}
export default RouteIndex
