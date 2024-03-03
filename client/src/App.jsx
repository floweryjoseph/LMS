
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Courses from './students/pages/Courses';
import FAQs from './Shared/pages/FAQs';
import About from  './students/components/About'
import Testimonial from './Shared/pages/Testimonial';
import NavBar from './Shared/components/NavBar';
import LandingPage from './Shared/pages/LandingPage';
import HomePage from './students/pages/HomePage';



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
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<About />} />  
          <Route path="/courses" element={<Courses />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/testimonial" element={<Testimonial />} />
         
         
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
          <Route path="/courses" element={<Courses />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/testimonial" element={<Testimonial />} />
         
         
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
