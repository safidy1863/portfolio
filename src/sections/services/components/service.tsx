import { Icon } from "@iconify/react";
import React from "react";
import { TService } from "../types";

type ServiceProps = {
  service: TService;
};

export const Service = (props: ServiceProps) => {
  const { icon, title, descriptions } = props.service;

  return (
    <article className="relative overflow-hidden bg-blue-dark text-white w-full px-5 pt-10 pb-20 rounded-md">
      <Icon icon={icon} className="text-5xl"/>
      <h1 className="my-3 text-2xl">{title}</h1>
      <ul className="text-blue-opacity-2">
        {descriptions.map((description, index) => (
          <li key={index} className="flex gap-x-1"><Icon icon="fluent:swipe-right-20-regular"/> {description}</li>
        ))}
      </ul>

      <div className="w-48 h-48 absolute right-0 opacity-5 transform -translate-y-[10%] translate-x-[30%] bg-gradient rounded-full"></div>
    </article>
  );
};
