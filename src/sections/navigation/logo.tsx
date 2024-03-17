import { isLight } from "../../signals";
import logoDark from "./../../assets/logo/logo-dark.svg";
import logoLight from "./../../assets/logo/logo-white.svg";

const Logo = () => {
  return (
    <div>
      <img
        src={isLight.value ? logoLight : logoDark}
        alt="safidy"
        className="h-10"
      />
    </div>
  );
};

export default Logo;
