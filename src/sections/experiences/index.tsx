import { links } from "../../constants";
import { Left } from "./left";
import { Right } from "./right";

export const Experiences = () => {
  return (
    <div
      id={links.experience}
      className="py-10 flex flex-col laptop:grid grid-cols-2 gap-x-5"
    >
      <Left />
      <Right />
    </div>
  );
};
