import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCoursesContext } from '../../context/courses_context';
import { Check, ClosedCaption, InfoRounded, Language, ShoppingCart } from '@mui/icons-material';
import StarRating from '../../Shared/components/StarRating';
import { useCartContext } from '../../context/cart_context';

const SingleCoursePage = () => {
  const { id } = useParams();
  const { fetchSingleCourse, single_course } = useCoursesContext();
  const {addToCart} = useCartContext();


  useEffect(() => {
    fetchSingleCourse(id);
  }, []);
  console.log(id)
  const {
    id: courseID,
    category,
    image,
    course_name,
    description,
    rating_count,
    rating_star,
    students,
    creator,
    updated_date,
    lang,
    actual_price,
    discounted_price,
    what_you_will_learn: learnItems,
    content,
  } = single_course;

  return (
    <div className="mt-20 w-full flex flex-col justify-center items-center gap-10">
      <div className="w-full  h-[500px] flex gap-3  bg-gray-900 ">
        <div className="mx-20  my-4 flex flex-col  gap-3 text-white w-[50%] ">
          <div className="text-center w-[80px] bg-yellow-500 text-black  font-semibold text-sm rounded-full py-1 px-2">
            {category}
          </div>
          
            <h5 className="text-2xl font-bold max-w-[80%]">{course_name}</h5>        
          
            <p className="text-lg max-w-[80%]">{description}</p>

            <div className="flex gap-2 items-center">
              <span className="font-semibold text-xl text-orange">{rating_star}</span>
              <StarRating rating_star={rating_star} />
              <span className="font-semibold text-sm">({rating_count})</span>
              <span className="text-sm">{students}</span>
            </div>
            
            <ul className="flex flex-col  justify-center gap-2">
              <li className="text-sm">
                Created by <span className="font-semibold">{creator}</span>
              </li>
              <li className="flex gap-2 text-sm">
                <InfoRounded/>
                Last updated {updated_date}
              </li>
              <li className="flex gap-2 text-sm">
                <Language/>
                {lang}
              </li>
              <li className="flex gap-2 text-sm">
                <ClosedCaption />
                {lang} [Auto]
              </li>
            </ul>
         
         
            <div className="flex gap-2 items-center">
              <span className="font-semibold text-2xl">${discounted_price}</span>
              <span className="text-[#eceb98] text-2xl line-through">${actual_price}</span>
            </div>
     
      
            <Link to="/cart"><button className='className="font-semibold bg-primary text-white py-2 px-4 rounded-md transition duration-300 hover:bg-red-900' onClick={() => addToCart(courseID, image, course_name, creator, discounted_price, category)}>
              <ShoppingCart /> Add to cart</button> 
            </Link>
         
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <img src={image} alt={course_name} />
        </div>
      </div>

      {/* bottom part........................................................................................... */}

      <div className='w-[70%]  flex flex-col gap-4 mx-auto'>
     
      <ul className="border-2 p-4 grid gap-4">
      <div className="font-semibold text-2xl">What you'll learn</div>
      {learnItems && learnItems.map((learnItem, idx) => (
        <li key={idx} className="text-sm flex gap-2 text-gray-500 items-center">
          <Check/>
          <span className="font-semibold opacity-75">{learnItem}</span>
        </li>
      ))}
    </ul>
      </div>

      <div className='w-[70%] mx-auto flex flex-col gap-6'>
     
      <ul className="border-2 flex flex-col p-4 gap-4">
      <div className="font-semibold text-2xl">Course Content</div>
        {content && content.map((contentItem, idx) => (
        <li key={idx} className="text-lg font-semibold py-2 px-3 bg-background_clr text-gray-500  border border-gray-300">
          {contentItem}
        </li>
        ))}
      </ul>

      </div>

     </div>
  );
};

export default SingleCoursePage;
