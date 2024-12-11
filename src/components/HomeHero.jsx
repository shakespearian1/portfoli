import { Star } from "lucide-react";
import { skills } from "../data/data";
import Button from "./Button";
import Button2 from "./Button2";
import avatar from "/src/assets/avatar.jpg";

const HomeHero = () => {
  return (
    <>
      <section
        className="relative grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-8 lg:px-10 md:px-5 px-2 md:pb-12 md:pt-28 pb-4 pt-28 place-items-center"
        id="/"
      >
        <div className="w-full">
          <h1 className=" lg:text-6xl md:text-3xl text-3xl font-semibold pb-6">
            Hey, I am Stephen, A Senior software developer and a creative ui/ux
            designer
          </h1>
          <div className="flex items-center md:gap-12 gap-8 pt-4 pb-8">
            {skills.map((s) => (
              <p key={s.skill} className="flex items-center md:gap-3 gap-1">
                <span className="text-xl text-yellow-400">{s.icon}</span>
                <span className="text-lg">{s.skill}</span>
              </p>
            ))}
          </div>

          <div className="space-x-6">
            <Button2 />
            <Button text="Let's Talk" />
          </div>
        </div>

        <div className="bg-blue-600 rounded-full md:w-[60%] z-10 md:h-[400px] h-[300px] w-[80%] md:order-last order-first overflow-hidden">
          <img src={avatar} alt="" className="w-full h-full" />
        </div>
      </section>
    </>
  );
};

export default HomeHero;
