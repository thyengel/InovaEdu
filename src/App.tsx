import { Routes, Route } from "react-router";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import TopBar from "./components/topBar/TopBar";
import PrivateRoutes from "./components/privateRoutes/PrivateRoutes";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background:
          "radial-gradient(1200px 600px at 10% 20%, rgba(15,76,107,0.08), transparent 12%), radial-gradient(900px 500px at 85% 80%, rgba(70, 39, 115, 0.14), transparent 10%), linear-gradient(180deg, #050507 0%, #061605ff 100%)",
      }}
    >
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="home" element={<TopBar />} />
        </Route>
        <Route path="/" element={<Login />} />
        <Route path="cadastro" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
