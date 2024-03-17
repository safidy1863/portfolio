import React from "react";
import { TSkill } from "../types";
import { Icon } from "@iconify/react";

type SkillProps = {
  skill: TSkill;
};

export const Skill = (props: SkillProps) => {
  const { title, percent, logo } = props.skill;

  return (
    <div>
      <div className="flex justify-between items-center text-blue-opacity-2 mb-2">
        <div className="flex items-center gap-x-3">
          <Icon icon={logo} /> <span>{title}</span>
        </div>

        <p>{percent}%</p>
      </div>
      <div className="relative">
        <div
          className="absolute h-3 bg-white rounded-2xl"
          style={{ width: `${percent}%` }}
        ></div>
        <div className="bg-blue-opacity-2 h-3 rounded-2xl w-full"></div>
      </div>
    </div>
  );
};
