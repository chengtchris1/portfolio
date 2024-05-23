import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { FaJava, FaPython, FaGitAlt } from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFramer,
  SiAlteryx,
  SiPowerautomate,
  SiStyledcomponents,
  SiAxios,
  SiSupabase,
  SiRailway,
  SiDask,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { DiMysql } from "react-icons/di";
import { GrSwift } from "react-icons/gr";
import { TbBrandThreejs } from "react-icons/tb";
import { motion } from "framer-motion";
import { useState } from "react";

function TechStack() {
  const icons = [
    {
      component: <IoLogoJavascript className="mx-2 sm:mx-10" />,
      name: "JavaScript",
    },
    { component: <IoLogoReact className="mx-2 sm:mx-10" />, name: "React" },
    { component: <FaJava className="mx-2 sm:mx-10" />, name: "Java" },
    { component: <FaPython className="mx-2 sm:mx-10" />, name: "Python" },
    { component: <SiDask className="mx-2 sm:mx-10" />, name: "Dask Dataframe" },
    { component: <GrSwift className="mx-2 sm:mx-10" />, name: "Swift" },
    {
      component: <SiTailwindcss className="mx-2 sm:mx-10" />,
      name: "Tailwind CSS",
    },
    { component: <SiExpress className="mx-2 sm:mx-10" />, name: "Express.js" },
    { component: <SiMongodb className="mx-2 sm:mx-10" />, name: "MongoDB" },
    { component: <SiAxios className="mx-2 sm:mx-10" />, name: "Axios" },
    {
      component: <SiFramer className="mx-2 sm:mx-10" />,
      name: "Framer Motion",
    },
    { component: <FaAws className="mx-2 sm:mx-10" />, name: "AWS" },
    { component: <FaGitAlt className="mx-2 sm:mx-10" />, name: "Git" },
    { component: <DiMysql className="mx-2 sm:mx-10" />, name: "MySQL" },
    { component: <SiAlteryx className="mx-2 sm:mx-10" />, name: "Alteryx" },
    {
      component: <SiPowerautomate className="mx-2 sm:mx-10" />,
      name: "PowerAutomate",
    },
    {
      component: <SiStyledcomponents className="mx-2 sm:mx-10" />,
      name: "Styled-Components",
    },
    {
      component: <SiSupabase className="mx-2 sm:mx-10" />,
      name: "Supabase",
    },
    {
      component: <SiRailway className="mx-2 sm:mx-10" />,
      name: "Railway",
    },
    {
      component: <TbBrandThreejs className="mx-2 sm:mx-10" />,
      name: "Three.js",
    },
  ];
  const [label, setLabel] = useState(" ");
  const iconRows = [];
  const rowSizes = [6, 5, 4, 3, 2];
  let i = 0;
  for (const size of rowSizes) {
    iconRows.push(icons.slice(i, i + size));
    i += size;
  }
  return (
    <>
      <div className="m-10 my-12 flex items-center justify-center text-left text-white sm:text-center">
        <h2 className="text-6xl ">Some technologies I've used...</h2>
      </div>
      {iconRows.map((row, rowIndex) => (
        <motion.div
          key={rowIndex}
          className="my-0 flex h-fit w-full items-center justify-center overflow-hidden"
        >
          {row.map((Icon, index) => (
            <div
              key={index}
              onMouseEnter={() => setLabel(Icon.name)}
              onMouseLeave={() => setLabel(" ")}
            >
              <motion.div className="text-5xl text-white sm:text-8xl">
                {Icon.component}
              </motion.div>
            </div>
          ))}
        </motion.div>
      ))}
      <div className="my-0 min-h-10 text-center text-white">{label}</div>
    </>
  );
}

export default TechStack;
