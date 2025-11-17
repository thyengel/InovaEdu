import { Routes, Route } from "react-router";
import Login from "./pages/login/Login";
import PrivateRoutes from "./components/privateRoutes/PrivateRoutes";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Course from "./pages/course/Course";
import TopBar from "./components/topBar/TopBar";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100%",
        background:
          "radial-gradient(1200px 600px at 10% 20%, rgba(15,76,107,0.08), transparent 12%), radial-gradient(900px 500px at 85% 80%, rgba(70, 39, 115, 0.14), transparent 10%), linear-gradient(180deg, #050507 0%, #061605ff 100%)",
      }}
    >
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="home" element={<Home />} />
          <Route path="trilhas/:path_id" element={<Course />} />
          <Route path="home" element={<TopBar />} />
        </Route>
        <Route path="/" element={<Login />} />
        <Route path="cadastro" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
