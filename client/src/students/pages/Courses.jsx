import Button from "../../Shared/components/Button";
// import CourseCard from "../components/CourseCard";
// import CourseTabs from "../components/CourseTabs";
import CourseCard from './../components/CourseCard';

const Courses = () => {
  return (
  <>
      <div className="w-full h-screen flex  flex-col bg-background_clr gap-5 justify-center items-center">
        <p className="text-xl m-2 font-bold text-yellow-900">OUR COURSES</p>
        <p className="text-[30px] m-2 font-bold">Explore Our Popular Online Courses</p>

        {/* <div className="flex gap-2">
          <Button btnName="Python"/>
          <Button btnName="Web Development"/>
          <Button btnName="Data Science"/>
          <Button btnName="AWS Certification"/>
          <Button btnName="Design"/>
          <Button btnName="Marketing"/>
        </div> */}

       
        <CourseCard/>

        <p className="text-2xl font-bold text-yellow-900">Enroll For More Courses.....</p>
     
    
      </div>
    </>
  );
};

export default Courses;


