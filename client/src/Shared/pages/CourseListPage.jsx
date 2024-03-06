// import { Star } from "@mui/icons-material";
// import { courses } from "../../../utils/data";
// import { useParams } from 'react-router-dom';
// import { useCoursesContext } from "../../context/courses_context";
import Tabs from "../components/Tabs";


const CourseListPage= () => {
  // const {courses} = useCoursesContext()
return (
  <div className="pt-10 w-full h-screen flex flex-col gap-5 justify-center items-center">
    <h1 className="text-3xl font-bold text-primary">A Broad Selection of Courses</h1>

    <p className="text-xl font-bold">Choose From 20000+ online video courses with new additions published every month
    </p>
    <Tabs/>
  </div>
)


} 

export default CourseListPage;
