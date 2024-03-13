import { useSignals } from "@preact/signals-react/runtime";
import "./main.css";
import { Footer, Home, Navigation } from "./sections";
import { isLight } from "./signals";

const App = () => {
  useSignals();

  return (
    <div
      className={`${
        isLight.value ? "" : "dark"
      } bg-gray dark:bg-blue-dark  min-h-screen`}
    >
      <div className="h-screen flex flex-col px-3 tablet:px-5 laptop:px-10">
        <Navigation />
        <Home />
      </div>
      <main></main>
      <Footer />
    </div>
  );
};

export default App;
