import { servicesData } from "../data/servicesData";
import Button from "../components/Button";

const Services = () => {
  return (
    <>
      <section className="md:px-10 px-3 py-20" id="/service">
        <h1 className="md:text-5xl text-3xl md:pb-6 pb-4 font-semibold ">
          My Services
        </h1>
        <p className="text-xl md:text-2xl pb-8">
          Here are the sevices i am providing to you
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-6">
          {servicesData.map((service) => (
            <div
              className="bg-gray-300 rounded-xl py-6 px-4 flex gap-5 justify-center flex-wrap text-center"
              key={service.label}
            >
              <p className="md:text-3xl text-4xl">{service.icon}</p>
              <p className="md:text-2xl text-lg">{service.label}</p>
            </div>
          ))}
        </div>
        <div className="w-full text-center mt-8">
          <Button text="View All" />
        </div>
      </section>
    </>
  );
};

export default Services;
