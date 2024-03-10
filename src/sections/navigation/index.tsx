import { Icon } from "@iconify/react";
import { links } from "../../constants";
import Logo from "./logo";
import { NavItem } from "./nav-item";

export const Navigation = () => {
  return (
    <header className="flex justify-between items-center">
      <Logo />
      <nav className="flex gap-x-5">
        <NavItem link={links.home} label="Home" isActive/>
        <NavItem link={links.experience} label="Experience" />
        <NavItem link={links.share} label="Share" />
        <NavItem link={links.hackaton} label="Hackaton" />
        <NavItem link={links.community} label="Community" />
      </nav>

      <div className="flex items-center gap-x-3">
        <Icon icon="solar:sun-linear" className="text-yellow text-3xl" />
        <button className="bg-yellow text-white px-5 py-2 rounded-3xl">Hire me</button>
      </div>
    </header>
  );
};
