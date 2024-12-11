import { AboutData } from "./types";

import aboutimg from "../assets/lion0.jpg";

import { TbCircleNumber0Filled } from "react-icons/tb";
import { TbCircleNumber1Filled } from "react-icons/tb";
import { TbCircleNumber2Filled } from "react-icons/tb";

import { FaArrowDown } from "react-icons/fa";

export const aboutData: AboutData = {
  textheader: "What is JungleLogic Lab about?",

  servicesbutton: "Services",
  servicesicon: FaArrowDown,
  img: aboutimg,

  cards: [
    {
      id: 0,
      text: "Natural order",
      icon: TbCircleNumber0Filled,
      text0: "Providing products and services that customers truly need.",
      text1: "Following market trends.",
      text2:
        "Adapting to changes in technology, customer expectations and external factors.",
    },
    {
      id: 1,
      text: "Simple and Clean",
      icon: TbCircleNumber1Filled,
      text0: "Delivering Robust and clean Software Products.",
      text1:
        "Always focused on the simplest solution that solves your problem.",
      text2: "Avoid reinventing the weel.",
    },

    {
      id: 2,
      text: "Happiness",
      icon: TbCircleNumber2Filled,
      text0:
        "Find happiness in solving meaningful problems and creating value.",
      text1: "Fostering a positive mindset.",
      text2: "Being open to transformative ideas.",
    },
  ],
};
