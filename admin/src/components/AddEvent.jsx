import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddEvent = ({ onEventAdded }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [image, setImage] = useState(null);

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('event_date', eventDate);
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:3000/api/events', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      toast.success('Event created successfully!');
      onEventAdded(response.data); // Update the events list with the new event
      setTitle('');
      setContent('');
      setEventDate('');
      setImage(null);
    } catch (error) {
      console.error('Error creating event:', error);
      toast.error('Failed to create event.');
    }
  };

  return (
    <div className="bg-gray-900 text-white px-4 py-8 border-b border-gray-300 ml-4 mt-10 w-full h-full font-playfair mx-auto">
      <h2 className="text-3xl text-center mb-6 font-semibold">Add New Event</h2>
      <div className="flex justify-center">
        <form className="bg-gray-700 p-8 rounded-sm shadow-md w-full max-w-3xl" onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="shadow-sm appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="content">
              Content
            </label>
            <textarea
              id="content"
              className="shadow-sm appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="eventDate">
              Event Date
            </label>
            <input
              type="date"
              id="eventDate"
              className="shadow-sm appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="image">
              Image
            </label>
            <input
              type="file"
              id="image"
              className="shadow-sm appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500"
              onChange={(e) => setImage(e.target.files[0])}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full transition duration-300 ease-in-out"
          >
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
