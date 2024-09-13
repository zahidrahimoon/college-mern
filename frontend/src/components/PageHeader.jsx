const PageHeader = ({ backgroundImage, title, subtitle, buttonText }) => {
  return (
    <section
      id="page-header"
      className="bg-cover bg-center py-20 border-black border-b font-serif"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4" data-aos="fade-up">
          {title}
        </h2>
        <p className="text-lg text-white mb-4" data-aos="fade-up">
          {subtitle}
        </p>
        {buttonText && (
          <button
            className="mt-4 px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition duration-300"
            data-aos="fade-up"
          >
            {buttonText}
          </button>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
