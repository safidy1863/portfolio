import safidy from "./../../assets/images/safidy.png";
import balises from "./../../assets/images/balises.svg";

export const Right = () => {
  return (
    <div className="h-full w-[50%] relative">
      <img src={safidy} alt="Safidy" className="h-[600px] z-10 absolute -bottom-0 ml-[50%] transform -translate-x-1/2" />
      <img src={balises} alt="Balises" className="absolute bottom-0 z-0" />
    </div>
  );
};
