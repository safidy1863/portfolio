import { Icon } from "@iconify/react";
import { links } from "../../constants";
import Logo from "./logo";
import { NavItem } from "./nav-item";
// import { isLight } from "../../signals";

export const Navigation = () => {
  // const toggleTheme = () => (isLight.value = !isLight.value);

  return (
    <header className="fixed z-50 left-0 p-3 backdrop-opacity-30 tablet:px-5 large-width:px-10 right-0 flex justify-between items-center" style={{backdropFilter : 'blur(50px)'}}>
      <Logo />
      <nav className=" hidden laptop:flex gap-x-5">
        <NavItem link={links.home} label="Home" isActive />
        <NavItem link={links.experience} label="Experience" />
        <NavItem link={links.share} label="Share" />
        <NavItem link={links.hackaton} label="Hackaton" />
        <NavItem link={links.community} label="Community" />
      </nav>
      <div className="flex items-center gap-x-3">
        {/* <button onClick={toggleTheme}>
          <Icon
            icon={isLight.value ? "solar:moon-linear" : "solar:sun-linear"}
            className="text-blue-dark dark:text-yellow text-3xl"
          />
        </button> */}
        <button className="bg-yellow text-white px-5 py-2 rounded-3xl z-20 cursor-pointer">
          Hire me
        </button>

        <div className="dropdown z-10 dropdown-bottom dropdown-end laptop:hidden">
          <div tabIndex={0} role="button">
            {" "}
            <Icon icon="ri:menu-3-line" className="text-3xl" />{" "}
          </div>
          <nav
            tabIndex={0}
            className="dropdown-content bg-blue-opacity shadow py-3 pr-3 mt-3 pl-10 rounded flex flex-col items-end gap-5"
          >
            <NavItem link={links.home} label="Home" isActive />
            <NavItem link={links.experience} label="Experience" />
            <NavItem link={links.share} label="Share" />
            <NavItem link={links.hackaton} label="Hackaton" />
            <NavItem link={links.community} label="Community" />
          </nav>
        </div>
      </div>
    </header>
  );
};
