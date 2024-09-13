import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from 'react-icons/fa';

const ContactDetails = () => {
  return (
    <section id="contact-details" className="section-p1 py-8 px-4 md:py-10 md:px-6 bg-gray-100 text-gray-800 font-serif">
      <div className="flex flex-col md:flex-row max-w-8xl mx-auto">
        <div className="details w-full md:w-1/2 px-4 mb-8 md:mb-0">
          <span className="text-md md:text-lg text-purple-600">Get in touch</span>
          <h2 className="text-2xl md:text-3xl font-semibold my-3 md:my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque unde vero!
          </h2>
          <div className="flex items-center mb-3 md:mb-4">
            <FaMapMarkerAlt className="text-purple-600 mr-2 text-lg md:text-xl" />
            <p className="text-sm md:text-base">Al-Karam Studio LuckyOne</p>
          </div>
          <div className="flex items-center mb-3 md:mb-4">
            <FaEnvelope className="text-purple-600 mr-2 text-lg md:text-xl" />
            <p className="text-sm md:text-base">info@example.com</p>
          </div>
          <div className="flex items-center mb-3 md:mb-4">
            <FaPhoneAlt className="text-purple-600 mr-2 text-lg md:text-xl" />
            <p className="text-sm md:text-base">+1 234 567 890</p>
          </div>
          <div className="flex items-center mb-3 md:mb-4">
            <FaClock className="text-purple-600 mr-2 text-lg md:text-xl" />
            <p className="text-sm md:text-base">Monday - Saturday: 11:00 AM - 2:00 PM</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14471.99057347296!2d67.0682739871582!3d24.9321502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f4e2375278b%3A0x8f54a569b216cea0!2sAlKaram%20Studio%20-%20LuckyOne!5e0!3m2!1sen!2s!4v1703818297485!5m2!1sen!2s"
            width="100%"
            height="300"
            className="md:h-450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
