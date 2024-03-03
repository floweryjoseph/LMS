import { Star } from "@mui/icons-material";
import { coursesCard } from "../../../utils/DummyData";


const CourseCard = () => {
  
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-5 ">
        {coursesCard.map((item) => (
          <div key={item.id} className="w-[250px] min-h-[400px] flex flex-col  bg-gray-100 gap-2 shadow-md hover:scale-y-105 transition-all ease-in-out duration-500">
          
              <img className="w-full" src={item.cover} />
              <div className="px-1 flex flex-col gap-2">
              <h1 className="text-md font-bold  ">{item.coursesName}</h1>
           

          
              <div className="flex items-center text-lg font-bold gap-2">
                {Array.from({ length: item.rating }).map((a, i) => (
                  <div key={i} className="text-yellow-600">
                    <Star />
                  </div>
                 
                ))}
                {item.rating}
              </div>
           
                <img className="w-[35px] h-[35px] aspect-square rounded-full" src={item.courseTeacher.dcover} />
                <p className="text-sm">{item.courseTeacher.name}</p>
            
              <p>{item.priceAll}/{item.pricePer}</p>
              <button  className="w-full flex justify-center items-center font-bold  hover:border-yellow-900 hover:border-solid hover:border-[1px]  py-2 text-yellow-900 duration-500">ENROLL NOW</button>
              
            </div>
           </div>
        ))}
      </div>
    </>
  );
};

export default CourseCard;
