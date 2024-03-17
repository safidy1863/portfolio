import { Skill } from "./components";
import { DSkills } from "./data";

export const Right = () => {
  return (
    <div className="w-full bg-blue-opacity padding py-10">
      <h2 className="text-blue-opacity-2 text-lg">Special Skills</h2>
      <h1 className="text-2xl text-white">
        My <span className="text-yellow">Special Skill</span> Field Here.
      </h1>

      <div className="flex flex-col gap-y-5 mt-5">
        {DSkills.map((skill, index) => (
          <Skill key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};
