import { createGlobalStyle } from 'styled-components'
import { Routes, Route, Outlet } from "react-router-dom"
import Main from "./components/main"
import Nav from './components/nav'

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}

body {
  min-height: 100vh;
  background-color: #f8f9fa;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.5;
}

h1, h2, h3 {
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
}
`

function App() {
  return (
    <div className="App">
      <Nav />
      <GlobalStyle />
      <Outlet />
        <Routes>
          <Route path="/" element={<Main/>} />
        </Routes>
    </div>
  );
}

export default App;
