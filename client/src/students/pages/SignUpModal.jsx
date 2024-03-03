import { Close, GitHub, Google,  Twitter, Visibility } from "@mui/icons-material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";


const SignUpModal = (props) => {


    const [isVisible, setIsVisible] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const [loginPage, setLoginPage] = useState(false);

    const handleEnrollClick = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };
  


    const toggleVisibility = () => {
      setIsVisible(prev =>!prev)
    
    }
    if(showModal){
      return (

        <div className="fixed top-0 left-0 w-full h-screen text-black bg-gray-900 bg-opacity-90 flex justify-center items-center z-50">
          <div className="w-[30%] bg-white p-5 rounded-lg shadow-lg">
          <div onClick={handleCloseModal} className="flex justify-end px-4 py-2 font-bold text-xl rounded-md cursor-pointer"> 
              <Close/>  </div>
          
            <h2 className="text-2xl font-bold mb-4 text-center">{loginPage ? "Login" : "Signup"}</h2>
            {!loginPage && <p className="text-center">
            Already a User?
            <span onClick={()=>setLoginPage(true)} className="text-primary ml-2 hover:underline cursor-pointer hover:text-red-600">Login</span>
            </p>}

            {loginPage && <p className="text-center">
           Create An Account?
            <span onClick={()=>setLoginPage(false)} className="text-primary ml-2 hover:underline cursor-pointer hover:text-red-600">Signup</span>
            </p>}
           
         
            <form className="w-full h-auto mt-4 px-5 py-10 border-2 flex  flex-col gap-5 rounded-md">
              
         { !loginPage && <div className="flex flex-col">
              <label>Full Name</label>
              <input type="text" className="border-2 p-2 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-red-100" />
            </div>}
            <div className="flex flex-col">
              <label>Email</label>
              <input type="text" className="border-2 p-2 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-red-100" />
            </div>
            <div className="flex flex-col relative">
              <label>Password</label>
              <input className="border-2 p-2 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-red-100" type = {isVisible ? "text" :"password"}/>
              {isVisible ? <VisibilityOff onClick={toggleVisibility} className="absolute top-8 right-3 text-red-300"/> : <Visibility onClick={toggleVisibility}className="absolute right-3 top-8 text-red-300"/>}
            </div>
            <div className="flex justify-between">
              <div className="flex gap-1">
                <input type="checkbox" className="" />
                <p>Remember Me</p>
              </div>
              {loginPage && <p>Forgot Password?</p>}
             
            </div>
    
            <button className="p-2 bg-red-300 text-white font-bold  hover:text-primary hover:scale-105 cursor-pointer ease-in-out duration-500">{loginPage ? "Login" : "Signup"}</button>
            <div className="flex items-center justify-center gap-2">
              <hr className="w-1/3" />
              <p className=" w-1/3 text-center text-sm mx-2">Or Sign In With </p>
              <hr className="w-1/3" />
            </div>
            <div className="flex gap-4 ">
              <div className="w-1/3 py-1 flex items-center justify-center border-2 text-red-300 hover:text-primary hover:scale-105 cursor-pointer ease-in-out duration-500"><Google /></div>
              <div className="w-1/3 py-1 flex items-center justify-center  border-2 text-red-300  hover:text-primary hover:scale-105 cursor-pointer ease-in-out duration-500"><Twitter /></div>
              <div className="w-1/3 py-1 flex items-center justify-center  border-2 text-red-300  hover:text-primary hover:scale-105 cursor-pointer ease-in-out duration-500"><GitHub /></div>
            </div>
          </form>
           
          </div>
        </div>
      );
    }
    return (
        <div className={props.class} onClick={handleEnrollClick}>
          {props.modalTrigger}
        </div>
    )
  
  
};
export default SignUpModal