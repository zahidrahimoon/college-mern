import { useEffect, useState } from "react";
import axios from "axios";
import { FaBell, FaCalendarAlt, FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import EditNews from "./EditNews"; // Import the EditNews component

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null); // State for selected news

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/news");
        setNews(response.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/news/${id}`);
      setNews(news.filter((item) => item.id !== id));
      toast.success("News deleted successfully!");
    } catch (error) {
      console.error("Error deleting news:", error);
      toast.error("Failed to delete news!");
    }
  };

  const handleEdit = (item) => {
    setSelectedNews(item); // Set the selected news item
  };

  const handleBack = () => {
    setSelectedNews(null); // Go back to the news list
  };

  if (selectedNews) {
    // Render the EditNews component if there's a selected news item
    return <EditNews news={selectedNews} onBack={handleBack} />;
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-900 text-white font-serif mr-10">
      <h1 className="text-4xl text-center mb-8" style={{ color: '#AEB7C0' }}>Notifications</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {news.length > 0 ? (
          news.map((item) => (
            <div
              key={item.id}
              className="bg-gray-700 shadow-lg rounded-lg p-6 flex items-start"
            >
              <div className="flex-shrink-0">
                <FaBell className="text-blue-500 text-3xl" />
              </div>
              <div className="flex-1 ml-4">
                <h2 className="text-2xl font-semibold mb-2" style={{ color: '#AEB7C0' }}>
                  {item.title}
                </h2>
                <p className="text-gray-300 mb-4">{item.content}</p>
                <div className="flex flex-col space-y-2 text-sm text-gray-400 mb-4">
                  <div className="flex items-center space-x-2">
                    <FaCalendarAlt className="text-blue-500" />
                    <span className="font-semibold">Start Date:</span>
                    <span className="text-blue-300 py-1 px-3 rounded-full">
                      {new Date(item.initial_date).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaCalendarAlt className="text-red-500" />
                    <span className="font-semibold">End Date:</span>
                    <span className="text-red-300 py-1 px-3 rounded-full">
                      {new Date(item.final_date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={() => handleEdit(item)}
                    className="text-blue-400 hover:text-blue-600 transition-colors"
                  >
                    <FaEdit className="text-2xl" />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-400 hover:text-red-600 transition-colors"
                  >
                    <FaTrash className="text-2xl" />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400">
            No notifications available
          </p>
        )}
      </div>
    </div>
  );
};

export default NewsList;
