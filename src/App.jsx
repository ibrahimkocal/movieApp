import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav>
        <Logo />
        <Search />
        <NavSearchResults />
      </Nav>
    </>
  );
}

function Nav({ children }) {
  return (
    <nav className="bg-dark text-white p-2">
      <div className="container">
        <div className="row align-items-center">{children}</div>
      </div>
    </nav>
  );
}

function Logo() {
  return (
    <div className="col-4">
      <i className="bi bi-camera-reels me-2"></i>
      Movie App
    </div>
  );
}

function Search() {
  return (
    <div className="col-4">
      <input type="text" className="form-control" placeholder="Film ara..." />
    </div>
  );
}

function NavSearchResults() {
  return (
    <div className="col-4 text-end">
      <strong>5</strong> kayıt bulundu.
    </div>
  );
}

export default App;
