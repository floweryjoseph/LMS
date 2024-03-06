import { useState } from "react";

import {
  PYTHON,
  WEB_DEVELOPMENT,
  DATA_SCIENCE,
  AWS,
  DESIGN,
  MARKETING,
} from "../../../utils/constants";
import courses from "../../../utils/data";
import Course from "./Course";


const Tabs = () => {
  
  const [activeTab, setActiveTab] = useState(PYTHON);

  const tabHandler = (category) => {
    setActiveTab(category);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <div className="flex gap-2">
        <button
          className={`flex justify-center bg-white text-primary hover:text-white hover:bg-primary transition-all duration-500 border-[1px] p-3 cursor-pointer ${
            activeTab === PYTHON ? "bg-primary": ""
          }`}
          type="button"
          onClick={() => tabHandler(PYTHON)}
        >
          Python
        </button>
        <button
          className={`flex justify-center bg-white text-primary hover:text-white hover:bg-primary transition-all duration-500 border-[1px] p-3 cursor-pointer ${
            activeTab === WEB_DEVELOPMENT ? "bg-primary": ""
          }`}
          type="button"
          onClick={() => tabHandler(WEB_DEVELOPMENT)}
        >
          Web Development
        </button>
        <button
          className={`flex justify-center bg-white text-primary hover:text-white hover:bg-primary transition-all duration-500 border-[1px] p-3 cursor-pointer ${
            activeTab === DATA_SCIENCE ? "bg-primary" : ""
          }`}
          type="button"
          onClick={() => tabHandler(DATA_SCIENCE)}
        >
          Data Science
        </button>
        <button
          className={`flex justify-center bg-white text-primary hover:text-white hover:bg-primary transition-all duration-500 border-[1px] p-3 cursor-pointer ${
            activeTab === AWS ? "bg-primary" : ""
          }`}
          type="button"
          onClick={() => tabHandler(AWS)}
        >
          AWS
        </button>
        <button
          className={`flex justify-center bg-white text-primary hover:text-white hover:bg-primary transition-all duration-500 border-[1px] p-3 cursor-pointer ${
            activeTab === DESIGN ? "bg-primary" : ""
          }`}
          type="button"
          onClick={() => tabHandler(DESIGN)}
        >
          Design
        </button>
        <button
          className={`flex justify-center bg-white text-primary hover:text-white hover:bg-primary transition-all duration-500 border-[1px] p-3 cursor-pointer ${
            activeTab === MARKETING ? "bg-primary" : ""
          }`}
          type="button"
          onClick={() => tabHandler(MARKETING)}
        >
          Marketing
        </button>
        </div>
       
        <div className="w-[90%]  flex gap-3">
          {courses
            .filter((course) => course.category === activeTab)
            .map((course) => (
              <Course key={course.id} {...course} />
            ))}
        </div>
        
     
    </div>
  );
};

export default Tabs;
