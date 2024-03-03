
import {faqs} from '../../../utils/DummyData'
import { useState } from 'react';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full h-screen bg-background_clr flex flex-col gap-10 justify-center items-center">
      <h1 className="text-3xl font-bold mb-4 text-primary">Frequently Asked Questions</h1>
      <div className='w-[60%]'>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => handleAccordionClick(index)}
              className="w-full flex justify-between items-center p-4 bg-gray-100 rounded-lg focus:outline-none"
            >
              <span className="text-lg">{faq.question}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 transition-transform transform ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {activeIndex === index && (
              <div className="p-4 bg-gray-100 rounded-b-lg">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
