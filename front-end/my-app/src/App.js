import './App.css';
import { Routes, Route, Outlet } from "react-router-dom"
import Main from "./components/main"

function App() {
  return (
    <div className="App">
      <Outlet />
        <Routes>
          <Route path="/" element={<Main/>} />
        </Routes>
    </div>
  );
}

export default App;
