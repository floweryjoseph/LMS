import { Search, ShoppingCart } from "@mui/icons-material"
import { Link } from "react-router-dom"
import SignUpModal from "../../students/pages/SignUpModal";

import SideBar from "../../students/components/SideBar";
import { useCartContext } from "../../context/cart_context";


const NavBar = (props) => {
  const {total_items} = useCartContext();
  return (
    <div className='z-40 w-full h-[70px] px-5 border-b border-white bg-background_clr fixed top-0 left-0 flex justify-between items-center'>
    <Link to={'/'}><div className="flex items-center"><h2 className='font-extrabold text-2xl max-md:text-xl'>ACADEMIX</h2><span className='font-extrabold text-primary text-lg mt-2 max-md:text-xl' >PRO</span></div></Link>
  
    <div className='relative border-[1px] border-primary rounded-lg h-[35px] w-[340px] max-md:hidden'>
    <input className='bg-transparent h-[30px] w-[300px] text-primary placeholder:text-primary outline-none pl-2 py-4' placeholder='Search a Course here...' type='text'/>
    <Search className='absolute right-2 top-1 text-primary max-width-[80%] cursor-pointer'/>
    </div>
   
    {props.student && (<ul className='flex gap-6 text-primary max-md:hidden'>
       <Link to={'/home'}><li className="hover:underline hover:text-red-600">Home</li></Link>
        <Link to={'/courses'}><li className="hover:underline hover:text-red-600">Courses</li></Link>
        <Link to={'/instructor'}><li className="hover:underline hover:text-red-600">Instructor</li></Link>
        <Link to={'/mylearning'}><li className="hover:underline hover:text-red-600">My Learning</li></Link>
        <Link to={'/cart'}><li className="hover:underline relative hover:text-red-600"><ShoppingCart/> <span className="px-2 rounded-full absolute left-4 bottom-3 bg-white">{total_items}</span></li></Link>
       <SideBar/>
        
      
       
       
    </ul>)}
    
    {props.instructor && (<ul className='flex gap-6 text-primary max-md:hidden'>
       <Link to={'/'}><li className="hover:underline hover:text-red-600">Home</li></Link>
        <Link to={'/courses'}><li className="hover:underline hover:text-red-600">Courses</li></Link>
        <Link to={'/cart'}><li className="hover:underline relative hover:text-red-600"><ShoppingCart/> <span className="px-2 rounded-full absolute left-4 bottom-3 bg-white">0</span></li></Link>
       
       
       
    </ul>)}
    {props.admin && (<ul className='flex gap-6 text-primary max-md:hidden'>
       <Link to={'/'}><li className="hover:underline hover:text-red-600">Home</li></Link>
        <Link to={'/courses'}><li className="hover:underline hover:text-red-600">Courses</li></Link>
        <Link to={'/cart'}><li className="hover:underline relative hover:text-red-600"><ShoppingCart/> <span className="px-2 rounded-full absolute left-4 bottom-3 bg-white">0</span></li></Link>
       
       
       
    </ul>)}

    {props.loggedOut &&  
    <ul className='flex gap-6 text-primary max-md:hidden'>
    <Link to={'/'}><li className="hover:underline hover:text-red-600">Home</li></Link>
        <Link to={'/courses'}><li className="hover:underline hover:text-red-600">Courses</li></Link>
        <Link to={'/about'}><li className="hover:underline hover:text-red-600">About</li></Link>
        <Link to={'/testimonial'}><li className="hover:underline hover:text-red-600">Testimonial</li></Link>
        <SignUpModal class={"hover:border-[1px] px-1 rounded-lg cursor-pointer hover:text-red-600"} modalTrigger={"Signup"}/>
    </ul>
    }
    
    </div>
  
  )
}

export default NavBar