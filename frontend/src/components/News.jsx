import { useEffect, useState } from "react";
import axios from "axios";
import { FaBell, FaCalendarAlt } from "react-icons/fa";
import decoration from "../assets/decorationone.png";

const News = () => {
  const [news, setNews] = useState([]);

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

  return (
    <div className="container mx-auto px-4 py-8 font-serif">
      <h1 className="text-4xl text-center mb-8">Notifications</h1>
      <div className="flex flex-col items-center">
        <img src={decoration} className="mb-8" alt="Decoration" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {news.length > 0 ? (
          news.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 flex items-start space-x-4"
            >
              <div className="flex-shrink-0">
                <FaBell className="text-blue-500 text-3xl" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-700 mb-4">{item.content}</p>
                <div className="flex flex-col space-y-2 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <FaCalendarAlt className="text-blue-500" />
                    <span className="font-semibold">Start Date:</span>
                    <span className=" text-blue-800 py-1 px-3 rounded-full">
                      {new Date(item.initial_date).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaCalendarAlt className="text-red-500" />
                    <span className="font-semibold">End Date:</span>
                    <span className=" text-red-800 py-1 px-3 rounded-full">
                      {new Date(item.final_date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            No notifications available
          </p>
        )}
      </div>
    </div>
  );
};

export default News;
