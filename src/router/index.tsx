import { Routes, Route, Navigate } from 'react-router-dom';
import RoutesPath from 'pages';
import Main from 'pages/00_Main/Main';

interface IRouteIndex {
  isLogged: boolean;
}
function RouteIndex({ isLogged }: IRouteIndex) {
  return (
    <Routes>
      {!isLogged ? (
        <>
          {RoutesPath.map(({ path, Component }, idx) => {
            return <Route path={path} key={idx} element={<Component />} />;
          })}
        </>
      ) : (
        <Route path="*" element={<Navigate replace to="/" />} />
      )}
      <Route path="/" element={<Main />} />
    </Routes>
  );
}
export default RouteIndex;
