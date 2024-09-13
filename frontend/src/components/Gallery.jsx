import MasonryLayout from "./MasonryLayout";
import image1 from "../assets/pic-1.png";
import image2 from "../assets/premedical.avif";
import image3 from "../assets/principal.jpg";
import image4 from "../assets/qauid-e-Azam.jpg";
import image5 from "../assets/pic-2.png";
import image6 from "../assets/pic-3.png";
import image7 from "../assets/pic-1.png";
import image8 from "../assets/pic-2.png";
import image9 from "../assets/pic-3.png";
import image10 from "../assets/college-hero.jfif";
import decoration from "../assets/decorationone.png";

const Gallery = () => {
  const images = [
    { src: image1 },
    { src: image2 },
    { src: image3 },
    { src: image4 },
    { src: image5 },
    { src: image6 },
    { src: image7 },
    { src: image8 },
    { src: image9 },
    { src: image10 },
  ];
  return (
    <>
      <div className="p-6 max-w-full mx-auto w-full bg-gray-100 border-black border-b">
        <h2 className="text-2xl md:text-3xl mb-4 font-serif text-center mt-6">
          Sports and Other Activities
        </h2>
        <div className="flex flex-col items-center">
          <img src={decoration} className="mb-8 mt-7" alt="Decoration" />
        </div>
        <div className="p-4 text-gray-800 text-center">
          <p className="mb-4">
            Extra-curricular activities are seen as an opportunity for moral
            education, including adaptation to life in the group, forming good
            life-long habits, and cultivating a voluntary attitude.
          </p>
          <p>
            Extra-curricular activities constitute an integral and vital part of
            the academic scenario. Numerous extra-curricular activities are
            planned for students to create an environment that develops human
            faculties in a balanced proportion. Sports such as Cricket,
            Football, Tennis, Badminton, Squash, Basketball, Table Tennis, Throw
            Ball, and Scrabble provide students a wide range of activities.
          </p>
        </div>

        <MasonryLayout images={images} />
      </div>
    </>
  );
};

export default Gallery;
