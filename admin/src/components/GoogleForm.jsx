const GoogleForm = () => {
  return (
    <div className="flex flex-col items-center justify-center my-6">
      <a
        href="https://forms.gle/cxdoBf49455ex6Ld8"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <button className="bg-purple-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-purple-600 transition duration-300">
          Fill Out Form
        </button>
      </a>
    </div>
  );
};

export default GoogleForm;
