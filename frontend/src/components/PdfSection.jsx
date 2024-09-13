import decoration from "../assets/decorationone.png";
import pdfIcon from "../assets/pdf-icon.png"; 

const PdfSection = () => {
  const pdfs = [
    { id: 1, title: 'Commerce', link: 'https://example.com/commerce.pdf' },
    { id: 2, title: 'Pre-Engineering', link: 'https://example.com/pre-engineering.pdf' },
    { id: 3, title: 'Computer Science with Physics', link: 'https://example.com/cs-physics.pdf' },
    { id: 4, title: 'Pre-Medical', link: 'https://example.com/pre-medical.pdf' },
  ];

  return (
    <div className="container mx-auto py-6 px-4">
      <h1 className="text-4xl md:text-5xl font-serif mb-6 md:mb-8 font-bold text-center mt-6 md:mt-10">
        Sample Test Papers
      </h1>
      <div className="flex flex-col items-center">
        <img src={decoration} className="mb-6 md:mb-8 mt-4 md:mt-6" alt="Decoration" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
        {pdfs.map(pdf => (
          <div key={pdf.id} className="flex flex-col items-center space-y-4">
            <a 
              href={pdf.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <img src={pdfIcon} alt={pdf.title} className="w-24 md:w-36 h-24 md:h-36" />  {/* Adjusted size for responsiveness */}
            </a>
            <h3 className="text-xl md:text-2xl font-medium md:font-semibold">
              {pdf.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PdfSection;
