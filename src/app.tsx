import "./main.css";
import { Home, Navigation } from "./sections";

const App = () => {
  return (
    <div className="dark bg-white dark:bg-blue-dark  min-h-screen">
      <div className="h-screen flex flex-col px-10 pt-3">
        <Navigation />
        <Home />
      </div>
      <main></main>
    </div>
  );
};

export default App;
