import { useRoutes } from "react-router-dom";
import Home from './content/overview/Home/index';
import Status404 from './content/pages/Status/Status404';



export const AppWrapper: any = () => {
  let routes = useRoutes([
    {
      path: "/", element: <Home />
    },
    {
      path: "*", element: <Status404 />
    },
  ]);
  return routes;
};