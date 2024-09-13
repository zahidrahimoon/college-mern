import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaCalendarAlt, FaEdit, FaTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import UpdateEvent from './UpdateEvent'; // Import the UpdateEvent component

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editEvent, setEditEvent] = useState(null); // State for the event being edited

  // Fetch events from the backend
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/events');
        setEvents(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching events:', error);
        setError('Failed to load events.');
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Handle delete event
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/events/${id}`);
      setEvents(events.filter((event) => event.id !== id));
      toast.success('Event deleted successfully!');
    } catch (error) {
      console.error('Error deleting event:', error);
      toast.error('Failed to delete event.');
    }
  };

  // Handle edit event
  const handleEdit = (event) => {
    setEditEvent(event); // Set the event to be edited
  };

  // Handle canceling the edit
  const handleCancelEdit = () => {
    setEditEvent(null); // Close the edit form
  };

  // Handle event update
  const handleUpdateEvent = () => {
    setEditEvent(null); // Close the edit form
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/events');
        setEvents(response.data); // Refresh the events list
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  };

  return (
    <div className="w-full max-w-full bg-gray-900 text-black px-4 py-8 mx-auto ml-4">
      <h2 className="text-3xl text-center mb-6 font-semibold text-white">Event List</h2>
      {loading ? (
        <p className="text-center text-gray-500">Loading events...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : events.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {events.map(({ id, image, title, content, event_date }) => (
            <div
              key={id}
              className="bg-gray-700 shadow-lg rounded-sm border border-white p-6 hover:shadow-2xl hover:scale-[1.01] transition-transform duration-300 flex flex-col space-y-4 w-full max-w-sm"
            >
              {image && (
                <div className="relative group">
                  <img
                    src={`http://localhost:3000/uploads/${image}`}
                    alt={title}
                    className="rounded-t-lg w-full h-56 object-cover border-b border-white"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FaCalendarAlt className="text-white text-6xl" />
                  </div>
                </div>
              )}
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="text-white">{content}</p>
              <p className="text-sm text-gray-300">Event Date: {new Date(event_date).toLocaleDateString()}</p>
              <div className="flex justify-end space-x-2">
                <button
                  className="text-blue-400 hover:text-blue-300"
                  onClick={() => handleEdit({ id, title, content, event_date, image })}
                >
                  <FaEdit />
                </button>
                <button
                  className="text-red-400 hover:text-red-300"
                  onClick={() => handleDelete(id)}
                >
                  <FaTrashAlt />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No events found.</p>
      )}
      {editEvent && (
        <UpdateEvent
          event={editEvent}
          onUpdateEvent={handleUpdateEvent}
          onCancel={handleCancelEdit}
        />
      )}
    </div>
  );
};

export default EventList;
