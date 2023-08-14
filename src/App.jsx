import "./App.scss";

import { Header, About, Work } from "./container";
import { Navbar } from "./components";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
    </div>
  );
};

export default App;
