import Hero from "../components/Hero"
import Courses from "../../students/pages/Courses"
import Testimonial from "./Testimonial"
import FAQs from "./FAQs"
import About from '../../students/components/About';
import Footer from "../../students/components/Footer";






const LandingPage = () => {
  return (
    <>
   <Hero/>
   <About/>
   <Courses/>
    <Testimonial/>
   <FAQs/>
   
   <Footer/>
   
   </>
  )
}

export default LandingPage