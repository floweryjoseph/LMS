

const HeroPage = () => {
  return (
    <div className=" mt-16 w-full relative">
        <img src="/src/assets/hero_img.png" alt="" className="w-full "/>
        <div className='w-[500px] flex flex-col gap-4 absolute top-24 left-16 p-3'>
        
          <h1 className="text-3xl font-bold text-gray-400">Start your learning journey with amazing offers you won't find elsewhere!</h1>
          <p className="font-bold  text-gray-500">Enroll now and enjoy special discounts on our extensive course catalog. Don't miss out on this opportunity to invest in your future and unlock limitless learning potential!!!!</p>
      
      </div>

    </div>
  )
}

export default HeroPage