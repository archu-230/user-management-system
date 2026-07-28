import { BrowserRouter, Route, Routes } from "react-router-dom"
import { router } from "./config"

const routeRender = (routes) => {
  return routes.map((route) => (
    <Route
      key={route.key}
      path={route.path}
      element={route.element}
    >
        {route.children&&routeRender(route.children)}
    </Route>
  ));
};

export default function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
                {routeRender(router)}
            </Routes>
        </BrowserRouter>
    )
}