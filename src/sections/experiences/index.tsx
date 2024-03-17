import { Left } from "./left";
import { Right } from "./right";

export const Experiences = () => {
  return (
    <div className="py-10 grid grid-cols-2 gap-x-5">
      <Left />
      <Right />
    </div>
  );
};
