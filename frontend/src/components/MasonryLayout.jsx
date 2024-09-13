const MasonryLayout = ({ images = [] }) => {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 p-4">
      {images.map((image, index) => (
        <div key={index} className="mb-8 break-inside-avoid">
          <img 
            src={image.src} 
            alt={`img-${index}`} 
            className="w-full h-auto object-cover rounded-sm filter grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
};

export default MasonryLayout;
