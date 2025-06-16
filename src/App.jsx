import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
    </>
  );
}

function Nav() {
  return (
    <nav className="bg-primary text-white p-2">
      <div className="container">
        <div className="row align-items-center">5 kayıt bulundu</div>
      </div>
    </nav>
  );
}

export default App;
