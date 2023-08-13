import "./App.scss";

import { Header, About } from "./container";
import { Navbar } from "./components";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
    </div>
  );
};

export default App;
