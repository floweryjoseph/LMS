import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import { useCartContext } from "../../context/cart_context";

const Course = (props) => {
 
  const { id, image, course_name, creator, actual_price, discounted_price, rating_count, rating_star, category } = props;
  const {addToCart} = useCartContext();
  return (
    <div className="flex flex-col justify-between border border-gray-300 rounded-md p-4">
      <div className="mb-4">
        <div className="mb-2">
          <img src={image} alt={course_name} className="w-[240px] h-[135px]" />
        </div>
        <div>
          <h5 className="w-[240px] text-lg font-semibold">{course_name}</h5>
          <span className="text-gray-500">{creator}</span>
          <div className="flex items-center mt-1">
            <span className="font-semibold text-yellow-500">{rating_star}</span>
            <StarRating rating_star={rating_star} />
            <span className="text-gray-500 ml-1">({rating_count})</span>
          </div>
          <div className="flex mt-1">
            <span className="text-lg font-semibold text-green-600">${discounted_price}</span>
            <span className="text-gray-400 ml-2 line-through">${actual_price}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <Link to={`/courses/${id}`}><button className="bg-white border-2 border-primary text-primary py-2 px-4 rounded-md hover:bg-primary hover:text-white transition duration-300">
          See Details</button>
        </Link>
        <Link to="/cart"> <button className="bg-primary border-2 hover:border-primary text-white py-2 px-4 rounded-md hover:bg-white hover:text-primary transition duration-300" onClick={() => addToCart(id, image, course_name, creator, discounted_price, category)}>
          Add to Cart</button>
        </Link>
      </div>
    </div>
  );
};

export default Course;
