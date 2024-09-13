import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const NewsComponent = () => {
  const [newsData, setNewsData] = useState({
    title: '',
    content: '',
    initial_date: '',
    final_date: '',
  });

  const handleChange = (e) => {
    setNewsData({ ...newsData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/news', newsData);
      toast.success('News added successfully!');
      setNewsData({ title: '', content: '', initial_date: '', final_date: '' });
    } catch (error) {
      toast.error('Failed to add news!');
    }
  };

  return (
    <div className="max-w-md mx-auto my-[100px] p-6 rounded-sm shadow-lg border border-gray-700 bg-gray-700 text-white font-playfair">
      <h2 className="text-2xl font-bold text-center mb-6">
        Add News
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="title"
          placeholder="News Title"
          value={newsData.title}
          onChange={handleChange}
          className="w-full p-3 text-gray-200 bg-gray-600 rounded-md border border-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          required
        />
        <textarea
          name="content"
          placeholder="News Content"
          value={newsData.content}
          onChange={handleChange}
          className="w-full p-3 text-gray-200 bg-gray-600 rounded-md border border-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          rows="4"
          required
        ></textarea>
        <input
          type="date"
          name="initial_date"
          value={newsData.initial_date}
          onChange={handleChange}
          className="w-full p-3 text-gray-200 bg-gray-600 rounded-md border border-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          required
        />
        <input
          type="date"
          name="final_date"
          value={newsData.final_date}
          onChange={handleChange}
          className="w-full p-3 text-gray-200 bg-gray-600 rounded-md border border-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          required
        />
        <button
          type="submit"
          className="w-full p-3 bg-purple-600 text-white rounded-md font-semibold transition-colors hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewsComponent;
