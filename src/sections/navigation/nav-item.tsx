import { Link } from "react-scroll";

type NavItemProps = {
  link: string;
  label: string;
};

export const NavItem = (props: NavItemProps) => {
  const { label, link } = props;

  const handleSetActive = (active: string) => {
    console.log(active);
  };

  return (
    <Link
      to={link}
      spy={true}
      smooth={true}
      duration={500}
      onSetActive={handleSetActive}
      className="text-blue-dark dark:text-white cursor-pointer"
      activeClass="!text-yellow"
    >
      {label}
    </Link>
  );
};
