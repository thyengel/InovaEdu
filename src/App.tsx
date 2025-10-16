import Login from "./components/login/Login";

function App() {
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          // background: 'linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0,0,0, 0.8) 80%, rgba(40, 120, 32, 0.78) 100%)'
          // background: 'radial-gradient(circle,rgba(0, 0, 0, 1) 0%, rgba(0,0,0, 0.8) 80%, rgba(40, 120, 32, 0.78) 100%)'
          background:
            "radial-gradient(1200px 600px at 10% 20%, rgba(15,76,107,0.08), transparent 12%), radial-gradient(900px 500px at 85% 80%, rgba(70, 39, 115, 0.14), transparent 10%), linear-gradient(180deg, #050507 0%, #061605ff 100%)",
        }}
      >
        <Login />
      </div>
    </>
  );
}

export default App;
