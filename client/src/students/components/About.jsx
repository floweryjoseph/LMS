import {courseAbout} from '../../../utils/DummyData'
const About = () => {
  return (
    <div className='w-full h-screen bg-[#eae8e9] flex flex-col  gap-10 items-center justify-center' >
   
<p  className="text-[40px] ">Empowering Learning, Anytime, Anywhere</p>
        <p  className="text-[30px] text-primary">Fast-Track Your Expertise Journey!!</p>
    <div className="w-full flex  justify-center items-center gap-7" >
   
        {courseAbout.map((item)=>(
            <div key={item.id} className='w-[320px] h-[235Px] flex flex-col bg-gray-100 shadow-lg hover:scale-105 transition-transform ease-in-out duration-300  cursor-pointer rounded-lg  px-3 gap-7 justify-center items-center'>
                <img className = 'w-[50px] h-[50px] object-contain' src={item.image}/>
                
                <h2 className='text-lg'>{item.title}</h2>
                <p className="text-center">{item.desc}</p>
                
            </div>
        ))}


    </div>
</div>
  )
}

export default About