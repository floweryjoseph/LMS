import  { useState } from 'react';
import { testimonial } from '../../../utils/DummyData';

const Carousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 4;

  const handlePrev = () => {
    const newIndex = startIndex - cardsPerPage < 0 ? 0 : startIndex - cardsPerPage;
    setStartIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = startIndex + cardsPerPage >= testimonial.length ? startIndex : startIndex + cardsPerPage;
    setStartIndex(newIndex);
  };

  return (
    <div className="w-full h-screen bg-background_clr flex flex-col gap-5 items-center justify-center">

        <div className='flex  flex-col gap-4 justify-center items-center'>
        <h1 className='text-3xl font-bold text-primary'>Testimonial</h1>
        <p className='text-xl font-bold '>Our Successful Students</p>
        </div>
        <div className='flex justify-center items-center gap-5'>
      <button
        onClick={handlePrev}
        disabled={startIndex === 0}
        className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2 disabled:bg-gray-300 disabled:text-gray-700"
      >
        Prev
      </button>
      <div className="carousel flex ">
        {testimonial.slice(startIndex, startIndex + cardsPerPage).map((item, index) => (
          <div key={index} className="carousel-item w-64 mx-4 rounded-lg shadow-lg bg-white hover:scale-105 ease-in-out transition-transform duration-500">
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-t-lg" />
            <div className="p-4 flex flex-col gap-2">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-600 font-bold">{item.post}</p>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleNext}
        disabled={startIndex + cardsPerPage >= testimonial.length}
        className="px-4 py-2 bg-blue-500 text-white rounded-md ml-2 disabled:bg-gray-300 disabled:text-gray-700"
      >
        Next
      </button>
      </div>
    </div>
  );
};

export default Carousel;
