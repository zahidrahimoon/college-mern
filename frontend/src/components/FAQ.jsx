import { useState } from 'react';
import decoration from '../assets/decorationone.png';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What programs does the college offer?',
      answer: 'Our college offers a variety of programs including undergraduate degrees in Computer Science, Business Administration, Engineering, and Arts, as well as postgraduate programs and diplomas in specialized fields.',
    },
    {
      question: 'What are the admission requirements?',
      answer: 'Admission requirements vary by program. Generally, you will need to submit your academic transcripts, proof of previous qualifications, a completed application form, and possibly pass an entrance exam or interview depending on the program.',
    },
    {
      question: 'What is the tuition fee structure?',
      answer: 'Tuition fees depend on the program and the level of study. For undergraduate programs, fees typically range from $10,000 to $15,000 per year. Scholarships and financial aid options are available to help with costs.',
    },
    {
      question: 'What support services are available for students?',
      answer: 'Our college provides various support services including academic advising, career counseling, mental health services, tutoring, and extracurricular activities to ensure a well-rounded student experience.',
    },
  ];

  return (
    <div className="p-6 max-w-full mx-auto w-full md:w-[80%] lg:w-[70%]">
      <h2 className="text-xl md:text-2xl lg:text-3xl mb-4 font-serif text-center mt-6 font-semibold">Frequently Asked Questions</h2>
      <div className="flex flex-col items-center">
        <img src={decoration} className="mb-8 w-24 md:w-32 lg:w-40" alt="Decoration" />
      </div>
      <ul className="space-y-4">
        {faqs.map((faq, index) => (
          <li key={index} className="relative">
            <div
              className="flex items-center justify-between font-serif cursor-pointer text-base md:text-lg lg:text-xl w-full font-medium md:font-semibold lg:font-bold p-4 bg-orange-300 border rounded-lg shadow-sm transition-all duration-300 ease-in-out"
              onClick={() => toggleAnswer(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-content-${index}`}
            >
              <span>{faq.question}</span>
              <span className="ml-4 text-lg md:text-xl lg:text-2xl">
                {openIndex === index ? '−' : '+'}
              </span>
            </div>
            <div
              id={`faq-content-${index}`}
              className={`content ${openIndex === index ? 'block' : 'hidden'} p-4 mt-2 bg-orange-100 border rounded-lg shadow-sm transition-all duration-300 ease-in-out`}
            >
              <p className="text-sm md:text-base lg:text-lg">{faq.answer}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
