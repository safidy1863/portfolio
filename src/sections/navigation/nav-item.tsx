type NavItemProps = {
  link: string;
  label: string;
  isActive?: boolean;
};

export const NavItem = (props: NavItemProps) => {
  const { label, isActive = false } = props;

  return <button className={`${isActive ? "text-yellow" : "text-white"}`}>{label}</button>;
};
