import logoDark from "./../../assets/logo/logo-dark.svg";

const Logo = () => {
  return (
    <div className="relative">
      <img src={logoDark} alt="safidy" className="h-10 z-10" />
      <div className="absolute w-[600px] aspect-square rounded-full border border-dashed border-gray opacity-15 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute w-[300px] aspect-square rounded-full border border-dashed border-gray opacity-60 transform -translate-x-1/2 -translate-y-1/2"></div>
      {/* <div className="absolute w-[200px] aspect-square rounded-full bg-gradient transform -translate-x-1/2 -translate-y-1/2 z-0"></div> */}
    </div>
  );
};

export default Logo;
