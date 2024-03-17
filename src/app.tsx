import { useSignals } from "@preact/signals-react/runtime";
import "./main.css";
import { Footer, Home, Navigation, Services } from "./sections";
import { isLight } from "./signals";
import { Experiences } from "./sections/experiences";

const App = () => {
  useSignals();

  return (
    <div
      className={`${
        isLight.value ? "" : "dark"
      } bg-gray dark:bg-blue-dark  min-h-screen`}
    >
      <div className="absolute z-10 top-28">
        <div className=" absolute w-[600px] aspect-square rounded-full border border-dashed border-blue-dark dark:border-gray opacity-15 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-[300px] aspect-square rounded-full border border-dashed border-blue-dark dark:border-gray opacity-60 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-[150px] aspect-square rounded-full bg-gradient opacity-10 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
      </div>
      <div className="h-screen flex flex-col padding relative">
        <Navigation />
        <Home />
      </div>
      <main>
        <Services />
        <Experiences />
      </main>
      <Footer />
    </div>
  );
};

export default App;
