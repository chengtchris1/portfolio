import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { SiFramer } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { SiAlteryx } from "react-icons/si";
import { SiPowerautomate } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { motion } from "framer-motion";
import { SiAxios } from "react-icons/si";
import { useState } from "react";
import { SiSupabase } from "react-icons/si";
import { GrSwift } from "react-icons/gr";
import { SiRailway } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";
import { SiDask } from "react-icons/si";

function TechStack() {
  const icons = [
    {
      component: <IoLogoJavascript className='mx-2 sm:mx-10' />,
      name: "JavaScript",
    },
    { component: <IoLogoReact className='mx-2 sm:mx-10' />, name: "React" },
    { component: <FaJava className='mx-2 sm:mx-10' />, name: "Java" },
    { component: <FaPython className='mx-2 sm:mx-10' />, name: "Python" },
    { component: <SiDask className='mx-2 sm:mx-10' />, name: "Dask Dataframe" },
    { component: <GrSwift className='mx-2 sm:mx-10' />, name: "Swift" },
    {
      component: <SiTailwindcss className='mx-2 sm:mx-10' />,
      name: "Tailwind CSS",
    },
    { component: <SiExpress className='mx-2 sm:mx-10' />, name: "Express.js" },
    { component: <SiMongodb className='mx-2 sm:mx-10' />, name: "MongoDB" },
    { component: <SiAxios className='mx-2 sm:mx-10' />, name: "Axios" },
    {
      component: <SiFramer className='mx-2 sm:mx-10' />,
      name: "Framer Motion",
    },
    { component: <FaAws className='mx-2 sm:mx-10' />, name: "AWS" },
    { component: <FaGitAlt className='mx-2 sm:mx-10' />, name: "Git" },
    { component: <DiMysql className='mx-2 sm:mx-10' />, name: "MySQL" },
    { component: <SiAlteryx className='mx-2 sm:mx-10' />, name: "Alteryx" },
    {
      component: <SiPowerautomate className='mx-2 sm:mx-10' />,
      name: "Microsoft PowerAutomate",
    },
    {
      component: <SiStyledcomponents className='mx-2 sm:mx-10' />,
      name: "Styled Components",
    },
    {
      component: <SiSupabase className='mx-2 sm:mx-10' />,
      name: "Supabase",
    },
    {
      component: <SiRailway className='mx-2 sm:mx-10' />,
      name: "Railway",
    },
    {
      component: <TbBrandThreejs className='mx-2 sm:mx-10' />,
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
      <div className='text-white text-left sm:text-center'>
        <h2 className='text-6xl'>Some technologies I've used...</h2>
      </div>
      {iconRows.map((row, rowIndex) => (
        <motion.div
          key={rowIndex}
          className='flex items-center justify-center overflow-hidden w-full h-fit my-8'
        >
          {row.map((Icon, index) => (
            <div
              key={index}
              onMouseEnter={() => setLabel(Icon.name)}
              onMouseLeave={() => setLabel(" ")}
            >
              <motion.div className='text-white text-5xl sm:text-9xl'>
                {Icon.component}
              </motion.div>
            </div>
          ))}
        </motion.div>
      ))}
      <div className='text-white text-center min-h-10'>{label}</div>
    </>
  );
}

export default TechStack;
