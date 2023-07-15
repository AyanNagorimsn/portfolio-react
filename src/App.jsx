import "./App.scss";

import { About, Footer, Header, Skills, Work } from "./container";
import { Navbar } from "./components";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
    </div>
  );
};

export default App;
