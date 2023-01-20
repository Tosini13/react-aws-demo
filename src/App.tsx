import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

type HeaderLinksPropsType = {};

const HeaderLinks: React.FC<HeaderLinksPropsType> = ({}) => {
  return (
    <div data-test-id="header_links">
      <Link to={"/"}>Home</Link>
      <Link to={"/subpage"}>Subpage</Link>
      <Link to={"/subpage/CuSTOMiD"}>Subpage with Id</Link>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <header>
        HEADER
        <HeaderLinks />
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <p>HOME</p>
                <img src={logo} className="App-logo" alt="logo" />
              </div>
            }
          />
          <Route path="/subpage" element={<p>Subpage</p>} />
          <Route path="/subpage/:id" element={<p>Subpage with id:</p>} />
        </Routes>
      </main>
      <footer>Footer</footer>
    </BrowserRouter>
  );
}

export default App;
