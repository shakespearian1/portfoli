import { Star, StarIcon } from "lucide-react";
import { FaStar } from "react-icons/fa";

const navLinks = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Service",
    path: "/service",
  },
  {
    label: "Portfolio",
    path: "/portfolio",
  },
  {
    label: "Testimonials",
    path: "/testimonials",
  },
];

export default navLinks;

export const skills = [
  {
    skill: "Designer",
    icon: <FaStar />,
  },
  {
    skill: "Figma",
    icon: <FaStar />,
  },
  {
    skill: "Developer",
    icon: <FaStar />,
  },
];
