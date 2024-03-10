import { Left } from "./left";
import { Right } from "./right";

export const Home = () => {
  return (
    <div className="flex-1 h-full flex items-center">
      <Left />
      <Right />
    </div>
  );
};
