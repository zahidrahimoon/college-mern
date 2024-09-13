import { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Import the toastify CSS
import { ClipLoader } from 'react-spinners';
import PeopleContainer from './PeopleContainer';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMail = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        'http://localhost:3000/api/send/mail',
        { name, email, message },
        {
          withCredentials: true,
          headers: { 'Content-Type': 'application/json' },
        }
      );
      setName('');
      setEmail('');
      setMessage('');
      toast.success(data.message);
    } catch (error) {
      if (error.response) {
        console.error('Server responded with a status code:', error.response.status);
        console.error('Response data:', error.response.data);
        const errorMessage = error.response.data.message || 'Something went wrong. Please try again.';
        toast.error(errorMessage);
      } else if (error.request) {
        toast.error('No response from server. Please try again later.');
      } else {
        toast.error('An unexpected error occurred. Please try again.');
      }
    }
     finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact-form" className="py-8 md:py-10 px-4 md:px-6 bg-white text-gray-800 font-serif">
      <div className="flex flex-col md:flex-row max-w-8xl mx-auto gap-6 md:gap-8">
        <div className="w-full md:w-1/2 px-4">
          <div className="contact-form w-full">
            <span className="text-md md:text-lg text-purple-600">Leave a message</span>
            <h3 className="text-2xl md:text-3xl font-semibold my-3 md:my-4">We'd Love to Hear From You</h3>
            <form id="contact-form" className="flex flex-col space-y-4" onSubmit={sendMail}>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="p-3 border border-gray-300 rounded w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="p-3 border border-gray-300 rounded w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <textarea
                id="message"
                placeholder="Your Message"
                className="p-3 border border-gray-300 rounded h-32 w-full"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <button
                id="submit-button"
                type="submit"
                className="bg-purple-600 text-white p-3 rounded hover:bg-purple-700 flex justify-center items-center w-full"
                disabled={loading}
              >
                {loading && <ClipLoader size={20} color="white" className="mr-2" />}
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <PeopleContainer />
        </div>
      </div>
      <ToastContainer /> 
    </section>
  );
};

export default ContactForm;
