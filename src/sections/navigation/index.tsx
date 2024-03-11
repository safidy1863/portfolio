import { Icon } from "@iconify/react";
import { links } from "../../constants";
import Logo from "./logo";
import { NavItem } from "./nav-item";
import { isLight } from "../../signals";

export const Navigation = () => {
  const toggleTheme = () => (isLight.value = !isLight.value);

  return (
    <header className="flex justify-between items-center">
      <Logo />
      <nav className="flex gap-x-5">
        <NavItem link={links.home} label="Home" isActive />
        <NavItem link={links.experience} label="Experience" />
        <NavItem link={links.share} label="Share" />
        <NavItem link={links.hackaton} label="Hackaton" />
        <NavItem link={links.community} label="Community" />
      </nav>

      <div className="flex items-center gap-x-3">
        <button onClick={toggleTheme}>
          <Icon icon={isLight.value ? "solar:moon-linear" : "solar:sun-linear"} className="text-blue-dark dark:text-yellow text-3xl" />
        </button>
        <button className="bg-yellow text-white px-5 py-2 rounded-3xl">
          Hire me
        </button>
      </div>
    </header>
  );
};
