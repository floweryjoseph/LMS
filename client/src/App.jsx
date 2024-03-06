
import { Route, Routes } from 'react-router-dom';
import './App.css'

import FAQs from './Shared/pages/FAQs';
import About from  './students/components/About'
import Testimonial from './Shared/pages/Testimonial';
import NavBar from './Shared/components/NavBar';
import LandingPage from './Shared/pages/LandingPage';
import HomePage from './students/pages/HomePage';
import PageNotFound from './Shared/pages/PageNotFound';
import SingleCoursePage from './students/pages/SingleCoursePage';
import Courses from './students/pages/Courses';

import CartPage from './students/pages/CartPage';
import CourseList from './Shared/pages/CourseListPage';





function App() {

  const admin =false;
  const instructor=false;
  const student=true;
  let routes;
  if(admin){
    routes = (
      <>
      
      {/* <Routes>
      <Route path="/" element={<AdminHome />} />
      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="/adminnavbar" element={<AdminNavbar />} />
      <Route path="/adminhero" element={<HeroPage />} />
      <Route path="*" element={<PageNotFound />} />
      </Routes>  */}
      </>
    )
  }else if(instructor){
    routes = (
      <>
      
      <Routes>

      </Routes>
      </>
    )

  }else if(student){
    routes = (
      <>
     
      <NavBar student={true}/>
      
      
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<About />} />  
          <Route path="/courses/:id" element={<SingleCoursePage />} />
          <Route path="/courses" element={<CourseList />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/cart" element={<CartPage/>} />
                <Route path="*" element={<PageNotFound />} />
         
      </Routes>


      </>
    )

  }else if(!admin && !instructor && !student){
    routes=(
      <>
       <NavBar loggedOut={true} />
      
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />                  
          {/* <Route path="/category/:category" element={<Courses />} /> */}
          <Route path="/courses/:id" element={<SingleCoursePage />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/courses" element={ <Courses/>}/>
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="*" element={<PageNotFound />} />
         
         
      </Routes>
      </>
    )
  }


  return (
    <div>
      {routes}
    </div>
    
  )
}

export default App
