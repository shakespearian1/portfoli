import { FaStar } from "react-icons/fa";
import "../styles/MySkills.css";

const MySkills = () => {
  return (
    <>
      <section className=" bg-black flex gap-20 py-3">
        {skills.map((skill) => (
          <marquee
            key={skill.name}
            className="flex justify-between text-white items-center gap-10"
          >
            <div className="flex items-center gap-2">
              <FaStar className="icon  text-yellow-400" />
              <p>{skill.name}</p>
            </div>
          </marquee>
        ))}
      </section>
    </>
  );
};

const skills = [
  {
    name: "ux/ui",
  },
  {
    name: "Development",
  },
  {
    name: "Product Design",
  },
  {
    name: "Social Media Design",
  },
  {
    name: "Branding",
  },
];

export default MySkills;
