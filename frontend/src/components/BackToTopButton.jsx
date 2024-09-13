import { useEffect, useState } from "react";
import { AiFillCaretUp } from 'react-icons/ai';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      className={`fixed bottom-4 right-4 p-3 bg-purple-600 text-white rounded-full shadow-lg transition-opacity duration-300 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"} hover:bg-purple-700 focus:outline-none`}
      aria-label="Back to top"
      onClick={scrollToTop}
    >
      <AiFillCaretUp className="text-2xl" />
    </button>
  );
};

export default BackToTopButton;
