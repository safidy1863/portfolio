import { links } from "../../constants";
import { Left } from "./left";
import { Right } from "./right";

export const Home = () => {
  return (
    <div
      id={links.home}
      className="flex-1 h-full flex flex-col-reverse items-start pt-14 laptop:pt-3 desktop:flex-row desktop:items-center"
    >
      <Left />
      <Right />
    </div>
  );
};
