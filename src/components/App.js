import { Routes, Route } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import Layout from "./Layout";
import routes from "../routes";

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthLayout />}>
        {routes.auth.map((route) => (
          <Route key={route.name} path={route.path} element={route.element} />
        ))}
      </Route>
      <Route path="/" element={<Layout />}>
        {routes.genaral.map((route) => (
          <Route key={route.name} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
