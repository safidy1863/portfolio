import { useSignals } from "@preact/signals-react/runtime";
import "./main.css";
import { Home, Navigation } from "./sections";
import { isLight } from "./signals";

const App = () => {
  useSignals()

  return (
    <div
      className={`${
        isLight.value ? "" : "dark"
      } bg-gray dark:bg-blue-dark  min-h-screen`}
    >
      <div className="h-screen flex flex-col px-10 pt-3">
        <Navigation />
        <Home />
      </div>
      <main></main>
    </div>
  );
};

export default App;
