// Import the named exports from the model
import { getCommerceFirstYearTimetable, updateCommerceXiData } from '../models/commercexiModel.js';

export const getTimetable = (req, res) => {
  getCommerceFirstYearTimetable((err, timetable) => {
    if (err) {
      console.error('Error querying the database:', err);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
    res.json(timetable);
  });
};

export const updateCommerceXiTimetable = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    await updateCommerceXiData(id, data);
    res.status(200).json({ message: 'Timetable updated successfully' });
  } catch (error) {
    console.error('Error updating the commercexi table:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// No need to use default export here; you can export these as named exports
