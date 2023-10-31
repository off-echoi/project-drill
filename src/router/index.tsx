import { Routes as Switch, Route, Navigate } from 'react-router-dom'
import Routes from 'pages'
import Main from 'pages/00_Main/Main'

interface IRouteIndex {
  isLogged: boolean
}
function RouteIndex({ isLogged }: IRouteIndex) {
  return (
    <Switch>
      {!isLogged ? (
        <>
          {Routes.map(({ path, Component, exact }, idx) => {
            return <Route path={path} key={idx} element={<Component />} />
          })}
        </>
      ) : (
        <Route path="*" element={<Navigate replace to="/" />} />
      )}
      <Route path="/" element={<Main />} />
    </Switch>
  )
}
export default RouteIndex
