import { Experience } from "./components";
import { DExperiences } from "./data";

export const Left = () => {
  return (
    <div className="padding py-10">
      <h1 className="text-2xl text-white">
        Work <span className="text-yellow">Experience</span>
      </h1>

      <div className="join join-vertical w-full mt-5">
        {DExperiences.map((experience, index) => (
          <Experience
            key={index}
            experience={experience}
            defaultChecked={index === 0}
          />
        ))}
      </div>
    </div>
  );
};
