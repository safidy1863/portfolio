import safidy from "./../../assets/images/safidy.webp";
import balises from "./../../assets/images/balises.svg";

export const Right = () => {
  return (
    <div className="h-full w-full laptop:w-[40%] large-width:w-[50%] relative">
      <img src={safidy} alt="Safidy" className="h-full laptop:h-auto laptop:max-h-[600px] large-width:max-h-[800px] extra-width:max-h-[1000px]  w-auto z-10 absolute -bottom-0 ml-[40%] large-width:ml-[50%] transform -translate-x-1/2" />
      <img src={balises} alt="Balises" className="absolute bottom-0 z-0 large-width:w-[800px] extra-width:w-[1200px]" />
    </div>
  );
};
