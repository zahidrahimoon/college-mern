import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import AddEvent from './AddEvent';
import EventList from './EventList';

const AdminEvents = () => {
  const [events, setEvents] = useState([]);

  // Function to update the events list
  const handleEventAdded = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  return (
    <div className="px-4 py-8 font-playfair border-white border-t bg-gray-900">
      <ToastContainer />
      <AddEvent onEventAdded={handleEventAdded} />
      <EventList events={events} />
    </div>
  );
};

export default AdminEvents;
