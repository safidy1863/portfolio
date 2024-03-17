import { Service } from "./components";
import { DServices } from "./data";

export const Services = () => {
  return (
    <div className="bg-blue-opacity padding py-10 mr-20">
      <h2 className="text-blue-opacity-2 text-lg">My services</h2>
      <h1 className="text-2xl text-white">
        <span className="text-yellow">Service</span> Provide For My Clients
      </h1>

      <div className="flex gap-x-5 large-width:gap-x-20 mt-5">
        {DServices.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};
