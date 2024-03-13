import { Left } from "./left";
import { Right } from "./right";

export const Home = () => {
  return (
    <div className="flex-1 h-full flex flex-col-reverse items-start pt-14 laptop:pt-3 laptop:flex-row laptop:items-center">
      <Left />
      <Right />
    </div>
  );
};
