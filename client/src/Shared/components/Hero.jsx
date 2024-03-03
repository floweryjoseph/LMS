import { ArrowRightAltRounded } from "@mui/icons-material";

import { Link } from "react-router-dom";
import SignUpModal from "../../students/pages/SignUpModal";

const Hero = () => {
  return (
    <>
      <div className="w-full h-[93vh]  mt-14 bg-background_clr flex">
        <div className="w-[50%] pl-20 flex gap-5 bg-background_clr">
          <div className="flex flex-col items-start justify-center gap-10">
            <h1 className="text-[40px] font-bold">
              Improve Your Learning Online Experience{" "}
              <span className="text-primary font-extrabold">
                Better Instantly
              </span>{" "}
            </h1>
            <p className="text-lg font-bold text-gray-600">
              We Have 20k+ Online Courses And 500k+ Online Registered Students.
              Find Your Desired Course From Them
            </p>
            <div className="flex gap-4">
              <SignUpModal modalTrigger={
              <div className="flex  justify-center text-white bg-primary p-3 cursor-pointer hover:bg-white hover:text-primary transition-all duration-500">
               <button>GET STARTED NOW</button>
               <ArrowRightAltRounded />
             </div>}/>
              
              <div className="flex  justify-center text-primary bg-white p-3 cursor-pointer hover:bg-primary hover:text-white transition-all duration-500">
                
                <Link to="/courses">
                  <button>VIEW COURSES</button>
                  <ArrowRightAltRounded />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50%] bg-background bg-hero-pattern  bg-cover  bg-center bg-no-repeat">
          <div className="w-full h-full bg-gradient-to-r from-background_clr to-transparent from-[0%] to-[35%]"></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
