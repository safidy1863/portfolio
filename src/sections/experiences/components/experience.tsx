import { ID_ACCORDION_EXPERIENCE } from "../constants";
import { TExperience } from "../types";

type ExperienceProps = {
  defaultChecked?: boolean;
  experience: TExperience;
};

export const Experience = (props: ExperienceProps) => {
  const { defaultChecked = false, experience } = props;
  const { date, description, title } = experience;

  return (
    <div className="collapse collapse-arrow join-item p-0">
      <input
        type="radio"
        className="peer"
        name={ID_ACCORDION_EXPERIENCE}
        defaultChecked={defaultChecked}
      />
      <h3 className="collapse-title text-2xl font-semibold w-60 px-0 peer-checked:text-yellow after:mt-1">{date}</h3>
      <div className="collapse-content px-0">
        <h1 className="text-white">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};
