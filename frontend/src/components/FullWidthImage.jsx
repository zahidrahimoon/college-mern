import { Parallax } from 'react-parallax';
import src from '../assets/college-hero.jfif';

const FullWidthImage = () => {
  return (
    <Parallax
      bgImage={src}
      strength={300}
      className="w-full h-[70vh] border-black border-b border-t" // Adjust height as needed
    >
    </Parallax>
  );
};

export default FullWidthImage;
